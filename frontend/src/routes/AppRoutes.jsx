import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from "../pages/Login";

import PrivateRoute from "../components/auth/PrivateRoutes";
import Dashboard from "../pages/Dashboard";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>}
            />

            <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
    );
}
