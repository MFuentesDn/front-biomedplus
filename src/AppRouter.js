import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/home/home';
import Inventario from './pages/inventario/inventario'
import Solicitudes from './pages/solicitudes/solicitudes'
import Providers from './pages/providers/providers'
import App from './App';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/inventario" element={<Inventario />} />
                    <Route exact path="/solicitudes" element={<Solicitudes />} />
                    <Route exact path="/providers" element={<Providers />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};