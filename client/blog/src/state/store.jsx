// client/src/state/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store; // Change to default export
