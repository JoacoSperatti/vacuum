import React from 'react';
import { Beef, Feather, Sparkles } from 'lucide-react';

export default function NuestrasCarnes() {
  return (
    <>
      {/* Page Hero Banner */}
      <header
        className="page-hero-banner"
        style={{ backgroundImage: "url('/assets/images/nuestras-carnes-banner.jpg')" }}
      >
        <div className="page-hero-content">
          <span className="section-tag">Variedad & Excelencia</span>
          <h1 className="page-hero-title">Nuestras carnes</h1>
          <p className="page-hero-lead">
            Conozca nuestros productos seleccionados y la tecnología de envasado al vacío
          </p>
        </div>
      </header>

      {/* Products Showcase */}
      <section className="products-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Catálogo Principal</span>
            <h2 className="section-title">Conozca nuestros productos:</h2>
            <p className="section-subtitle">
              Cortes frescos, envasados al vacío en origen para garantizar máxima terneza, higiene y durabilidad.
            </p>
          </div>

          <div className="category-showcase">
            {/* Res */}
            <article className="category-card">
              <div className="category-img">
                <img src="/assets/images/peceto-vacuno.jpg" alt="Cortes Vacunos de Res" loading="lazy" />
              </div>
              <div className="category-info">
                <h3 className="category-title">
                  <Beef size={24} color="var(--color-primary)" />
                  Res
                </h3>
                <p className="category-desc">
                  Disfrute del sabor robusto y la calidad superior de nuestra carne de res, seleccionada cuidadosamente para garantizar el mejor corte en su mesa.
                </p>
              </div>
            </article>

            {/* Aves */}
            <article className="category-card">
              <div className="category-img">
                <img src="/assets/images/pollo-granja.jpg" alt="Aves de Granja" loading="lazy" />
              </div>
              <div className="category-info">
                <h3 className="category-title">
                  <Feather size={24} color="var(--color-primary)" />
                  Aves
                </h3>
                <p className="category-desc">
                  Nuestra carne de ave es sinónimo de frescura y sabor. Nuestras aves ofrecen una carne jugosa y tierna, perfecta para comidas saludables y deliciosas.
                </p>
              </div>
            </article>

            {/* Cerdo */}
            <article className="category-card">
              <div className="category-img">
                <img src="/assets/images/ribs-cerdo.jpg" alt="Carne de Cerdo y Ribs" loading="lazy" />
              </div>
              <div className="category-info">
                <h3 className="category-title">
                  <Sparkles size={24} color="var(--color-primary)" />
                  Cerdo
                </h3>
                <p className="category-desc">
                  Destacada por su textura suave y sabor inigualable, nuestra carne de cerdo es la mejor elección para una amplia gama de platos tradicionales y modernos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Educational Section 1: Envasado al Vacío */}
      <section className="info-split-section">
        <div className="container">
          <div className="split-grid">
            <div className="split-media">
              <img src="/assets/images/ojo-de-bife.jpg" alt="Ojo de bife envasado al vacío" loading="lazy" />
            </div>
            <div className="split-text">
              <span className="section-tag">Maduración & Conservación</span>
              <h2>Lo que tiene que saber sobre la carne envasada al vacío</h2>
              <p>
                El proceso de maduración de la carne no requiere de oxígeno. Por lo tanto, la carne envasada al vacío puede madurar gracias a las enzimas naturales que posee durante el almacenamiento.
              </p>
              
              <div className="highlight-box">
                <p>
                  La carne <strong>no pierde su calidad</strong> en terneza; al contrario, al ser guardada en cámaras varios días al vacío y a temperaturas de entre 0 y 1 ºC (en heladera, no freezer) se vuelve más tierna, debido a la acción de las propias enzimas naturales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section 2: Manipulación en casa */}
      <section className="info-split-section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="split-grid reverse">
            <div className="split-media">
              <img src="/assets/images/pollo-cubeteado.jpg" alt="Corte y manipulación correcta de la carne" loading="lazy" />
            </div>
            <div className="split-text">
              <span className="section-tag">Consejos Útiles</span>
              <h2>¿Cómo manipular la carne en casa?</h2>
              <p>
                Si ha congelado la carne y desea cocinarla, descongélela lentamente con anticipación, idealmente en la heladera o a temperatura ambiente en un ambiente fresco.
              </p>
              
              <div className="highlight-box" style={{ borderLeftColor: '#ff9800' }}>
                <p>
                  <strong>Nunca descongele la carne en el microondas</strong>, con agua caliente o directamente en el fuego, ya que perderá su calidad original de terneza, jugosidad y sabor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
