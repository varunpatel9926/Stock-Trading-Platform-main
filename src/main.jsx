import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";


import ProtectedRoute from "./components/ProtectedRoute";

createRoot(document.getElementById('root')).render(

    <BrowserRouter>

      <Routes>

        <Route path="/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}

      </Routes>

    </BrowserRouter>



)
