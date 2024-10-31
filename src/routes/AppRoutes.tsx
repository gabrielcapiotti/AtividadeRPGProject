import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaListagemBleach } from '../pages/PaginaListagem';
import { PaginaRegistroBleach } from '../pages/PaginaRegistro';
import { PersonagensFavoritos } from '../pages/PaginaFavoritos';
import { ListagemSobrenome } from '../pages/PaginaSobrenome';
import { PaginaPrincipal } from '../pages/PaginaPrincipal';

export const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaListagemBleach />} />
                <Route path="/registro" element={<PaginaRegistroBleach />} />
                <Route path="/favoritos" element={<PersonagensFavoritos />} />
                <Route path="/familia/:sobrenome" element={<ListagemSobrenome />} />
                <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />

            </Routes>
        </Router>
    );
};
