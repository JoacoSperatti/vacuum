import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Contact Details */}
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={22} className="footer-icon" />
              <span>Av. Pres. Perón 1747, B1706 El Palomar, Provincia de Buenos Aires</span>
            </div>

            <div className="footer-contact-item">
              <WhatsAppIcon size={22} className="footer-icon" />
              <span>
                Pedidos 24 hs{' '}
                <a href="https://wa.me/5491126549565" target="_blank" rel="noopener noreferrer">
                  +54 9 11 2654-9565
                </a>
              </span>
            </div>

            <div className="footer-contact-item">
              <Mail size={22} className="footer-icon" />
              <span>
                <a href="mailto:carnes.vacuum@gmail.com">carnes.vacuum@gmail.com</a>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-column">
            <h4 className="footer-column-title">Navegación</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/quienes-somos">¿Quiénes somos?</Link></li>
              <li><Link to="/nuestras-carnes">Nuestras carnes</Link></li>
              <li>
                <Link to="/lista-de-precios">
                  Lista de Precios
                </Link>
              </li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li>
                <a href="/lista-de-precios-mayorista-vacuum.pdf" download="Lista_De_Precios_Mayorista_Vacuum.pdf">
                  Descargar Lista PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="footer-logo">
              <img src="/assets/images/logo.jpg" alt="VACUUM Carnicería" />
            </div>
            <p className="footer-tagline">
              Calidad y excelencia frigorífica en cortes envasados al vacío.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 VACUUM Carnicería. Todos los derechos reservados. Desarrollado por{' '}
            <a 
              href="https://portafolio-joaquinsperatti.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', fontWeight: 600, color: 'inherit' }}
            >
              JOAQUÍN SPERATTI
            </a>
            .
          </p>
          <p>Especialistas en gastronomía y cortes de alta calidad.</p>
        </div>
      </div>
    </footer>
  );
}
