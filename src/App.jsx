import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

import Inicio from './pages/Inicio.jsx';
import QuienesSomos from './pages/QuienesSomos.jsx';
import NuestrasCarnes from './pages/NuestrasCarnes.jsx';
import ListaDePrecios from './pages/ListaDePrecios.jsx';
import Contacto from './pages/Contacto.jsx';

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/nuestras-carnes" element={<NuestrasCarnes />} />
          <Route path="/lista-de-precios" element={<ListaDePrecios />} />
          <Route path="/precios" element={<Navigate to="/lista-de-precios" replace />} />
          <Route path="/precios-mayoristas" element={<Navigate to="/lista-de-precios" replace />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

