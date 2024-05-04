import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Register from './pages/Register';
import './App.css';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
