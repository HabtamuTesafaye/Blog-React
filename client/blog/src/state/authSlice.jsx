import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
    user: null,
    token: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isAuthenticated: !!localStorage.getItem('accessToken'),
    loading: false,
    error: null,
};


// Authentication slice
const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.access;
            state.refreshToken = action.payload.refresh;
            state.isAuthenticated = true;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

// Action creators
export const { login, logout, setUser, setLoading, setError } = authenticationSlice.actions;

// Thunk for logging in the user
export const loginUser = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('http://127.0.0.1:8000/user-api/api/token/', {
            email: credentials.email,
            password: credentials.password
        });

        if (response.status === 200) {
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            dispatch(login({ access, refresh }));
        } else {
            dispatch(setError("Login failed"));
        }
    } catch (err) {
        dispatch(setError("Login failed"));
        console.error("Login error:", err);
    } finally {
        dispatch(setLoading(false));
    }
};

// Thunk for fetching authenticated user info
export const fetchUserInfo = () => async (dispatch) => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    try {
        const response = await axios.get('http://127.0.0.1:8000/user-api/user-info/', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            dispatch(setUser(response.data));
        } else {
            dispatch(logout());
        }
    } catch (err) {
        console.error("Fetch user info error:", err);
        dispatch(logout());
    }
};

// Thunk for checking authentication status
export const checkAuth = () => async (dispatch) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        dispatch(logout());
        return;
    }

    // Check if token is still valid and fetch user info
    try {
        await dispatch(fetchUserInfo());
    } catch (err) {
        dispatch(logout());
        console.error("Check auth error:", err);
    }
};

// Thunk for registering a new user
export const registerUser = (userData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('http://127.0.0.1:8000/user-api/register/', userData);

        if (response.status === 201) {
            // Optionally handle successful registration, e.g., auto-login or redirect
            // Dispatch login action if you want to log in the user immediately
        } else {
            dispatch(setError("Registration failed"));
        }
    } catch (err) {
        dispatch(setError("Registration failed"));
        console.error("Registration error:", err);
    } finally {
        dispatch(setLoading(false));
    }
};


// Reducer
export default authenticationSlice.reducer;
