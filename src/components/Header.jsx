import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="brand-logo" onClick={closeMenu} title="VACUUM Carnicería - Inicio">
          <img src="/assets/images/logo.jpg" alt="VACUUM Carnicería Logo" />
        </Link>

        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`} aria-label="Navegación principal">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink to="/quienes-somos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            ¿Quiénes somos?
          </NavLink>
          <NavLink to="/nuestras-carnes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Nuestras carnes
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
