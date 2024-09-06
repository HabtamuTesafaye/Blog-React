// src/App.js

import React from 'react';
import AppRouter from './router';
import './styles/tailwind.css'; // Tailwind CSS
import './styles/ant-design.css'; // Ant Design CSS
import './styles/global.css'; // Global CSS

import { AdminProvider } from './context/AdminContext';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AdminProvider>
        <UserProvider>
          <div className="App">
            <AppRouter />
          </div>
        </UserProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default App;
