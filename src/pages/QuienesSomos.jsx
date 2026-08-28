import React from 'react';
import { Award, Scissors, ShieldAlert, Truck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO.js';

export default function QuienesSomos() {
  useSEO("Quiénes Somos | VACUUM Carnicería", "Conozca la historia de VACUUM Carnicería. Más de 30 años de experiencia y tradición frigorífica asegurando calidad y seguridad alimentaria.");
  return (
    <>
      {/* Page Hero */}
      <header className="page-hero">
        <div className="container">
          <span className="section-tag">Conocé nuestra historia</span>
          <h1 className="sr-only">Quiénes Somos - Frigorífico VACUUM Carnicería</h1>
          <h2 className="page-hero-title">¿Quiénes somos?</h2>
          <p className="page-hero-lead">
            Más de tres generaciones de dedicación, pasión frigorífica y servicio integral.
          </p>
        </div>
      </header>

      {/* About Content Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* Featured Card 1 */}
            <article className="about-card-featured">
              <h2>Nuestra Trayectoria</h2>
              <p>
                Somos una empresa familiar con más de 30 años de experiencia en el mercado de las carnes . nuestra planta frigorífica se encuentra ubicada en junín provincia de buenas aires.
              </p>
              <p>
                Allí, garantizamos las mejores prácticas de seguridad alimentaria, cumpliendo con los estándares requeridos en materia de calidad e higiene en todo el circuito productivo —desde el ingreso de materias primas, su tratamiento, fraccionamiento y envasado— hasta su posterior traslado.
              </p>
            </article>

            {/* Large Image Banner */}
            <div className="full-banner-wrap">
              <video 
                src="/2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                title="Instalaciones y equipo de VACUUM Carnicería"
              />
            </div>



            {/* Featured Card 2 */}
            <article className="about-card-featured">
              <h2>¿Qué ofrecemos?</h2>
              <p>
                Trabajamos con aves y cortes vacunos de novillo, carnes ovinas, porcinas, achuras, embutidos, fiambres, quesos y huevos.
              </p>
              <p>
                Asimismo, realizamos cortes especiales, a pedido y necesidad de nuestros clientes, brindando asesoramiento personalizado y asegurando la máxima satisfacción de sus requerimientos comerciales y particulares.
              </p>
            </article>
          </div>

          {/* Values Grid */}
          <div className="values-grid">
            <div className="value-box">
              <div className="value-icon">
                <Award size={28} />
              </div>
              <h3>Calidad Garantizada</h3>
              <p>Materia prima seleccionada rigurosamente de los mejores productores ganaderos.</p>
            </div>

            <div className="value-box">
              <div className="value-icon">
                <Scissors size={28} />
              </div>
              <h3>Cortes a Medida</h3>
              <p>Desposte y porcionado exacto según la necesidad de restaurantes y clientes.</p>
            </div>

            <div className="value-box">
              <div className="value-icon">
                <ShieldAlert size={28} />
              </div>
              <h3>Higiene & Inocuidad</h3>
              <p>Instalaciones certificadas con desinfección continua y protocolos sanitarios estrictos.</p>
            </div>

            <div className="value-box">
              <div className="value-icon">
                <Truck size={28} />
              </div>
              <h3>Logística Eficiente</h3>
              <p>Entregas programadas en vehículos refrigerados para preservar la cadena de frío.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
