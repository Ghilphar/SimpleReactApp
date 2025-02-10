import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

function AppRoutes() {

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Routes>
        {/* Redirect all users to the login page if not authenticated */}
        {!isAuthenticated ? (
            <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
            </>
        ) : (
            <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
        <Route path="/login" element={<Navigate to="/" />} /> {/* Prevent login after authentication */}
        <Route path="*" element={<NotFound />} /> {/* Show 404 page for unknown routes */}
        </>
        )}
    </Routes>
  );
}

export default AppRoutes;
