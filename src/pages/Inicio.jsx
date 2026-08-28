import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Package, Clock, Truck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO.js';

export default function Inicio() {
  useSEO("VACUUM Carnicería | Calidad y Tradición Frigorífica", "VACUUM Carnicería: 30 años de experiencia en el mercado de carnes y al servicio de la gastronomía. Cortes envasados al vacío con máxima calidad.");
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/banner.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <span className="section-tag">Tradición & Calidad Frigorífica</span>
          <h1 className="sr-only">VACUUM Carnicería: Venta de carne envasada al vacío directo de frigorífico</h1>
          <h2 className="hero-title">Calidad y precio sin intermediarios</h2>
          <div className="hero-cta-wrap">
            <Link to="/quienes-somos" className="btn btn-primary">
              Conózcanos
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Hacer Pedido
            </Link>
          </div>
        </div>
      </section>

      {/* Badges Strip */}
      <section className="badges-strip">
        <div className="container">
          <div className="badges-grid">
            <div className="badge-feature">
              <div className="badge-feature-icon">
                <ShieldCheck size={26} />
              </div>
              <div className="badge-feature-text">
                <h4>Seguridad Alimentaria</h4>
                <p>Higiene y control estricto en planta</p>
              </div>
            </div>

            <div className="badge-feature">
              <div className="badge-feature-icon">
                <Package size={26} />
              </div>
              <div className="badge-feature-text">
                <h4>Envasado al Vacío</h4>
                <p>Maduración óptima y frescura total</p>
              </div>
            </div>

            <div className="badge-feature">
              <div className="badge-feature-icon">
                <Clock size={26} />
              </div>
              <div className="badge-feature-text">
                <h4>Pedidos 24 hs</h4>
                <p>Atención continua por WhatsApp</p>
              </div>
            </div>

            <div className="badge-feature">
              <div className="badge-feature-icon">
                <Truck size={26} />
              </div>
              <div className="badge-feature-text">
                <h4>Cadena de Frío</h4>
                <p>Distribución en unidades térmicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Nuestra Selección</span>
            <h2 className="section-title">Lo mejor en carnes envasadas al vacío</h2>
            <p className="section-subtitle">
              Descubra nuestros productos y disfrute su calidad todos los días
            </p>
          </div>

          <div className="cards-grid">
            {/* Card 1: Bola de lomo */}
            <div className="card-item">
              <div className="card-image-wrap">
                <img src="/assets/images/bola-de-lomo.jpg" alt="Bola de Lomo Vacuna" loading="lazy" />
                <span className="card-badge">Vacuno</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">Cortes Vacunos</h3>
                <p className="card-desc">
                  Cortes seleccionados de novillo pesado y liviano, con maduración controlada que potencia su terneza, jugosidad y sabor natural.
                </p>
              </div>
            </div>

            {/* Card 2: Suprema de Pollo */}
            <div className="card-item">
              <div className="card-image-wrap">
                <img src="/assets/images/suprema-pollo.jpg" alt="Suprema de Pollo de Granja" loading="lazy" />
                <span className="card-badge">Aves</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">Aves de Granja</h3>
                <p className="card-desc">
                  Carne de ave fresca, jugosa y tierna. Supremas, pechugas y pollos enteros procesados bajo los más rigurosos estándares sanitarios.
                </p>
              </div>
            </div>

            {/* Card 3: Vacio de Cerdo */}
            <div className="card-item">
              <div className="card-image-wrap">
                <img src="/assets/images/vacio-cerdo.jpg" alt="Vacío de Cerdo Seleccionado" loading="lazy" />
                <span className="card-badge">Cerdo</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">Cortes Porcinos</h3>
                <p className="card-desc">
                  Variedad en cortes de cerdo destacados por su suave textura y frescura. Ideal para parrilla, horno y cocina gastronómica profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="showcase-action-center">
            <Link to="/nuestras-carnes" className="btn btn-primary">
              Saber más
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
