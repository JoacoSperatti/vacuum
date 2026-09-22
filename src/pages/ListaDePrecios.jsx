import React, { useState, useMemo } from 'react';
import { 
  Download, 
  Search, 
  ArrowUpDown
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { useSEO } from '../hooks/useSEO.js';
import { listaPreciosMayoristas, categoriasPrecios } from '../data/preciosMayoristas.js';

export default function ListaDePrecios() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'cards'

  // Schema estructurado para Google (Product / ItemList)
  const structuredSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Lista de Precios Mayorista de Achuras, Cerdo y Menudencias - VACUUM Carnicería',
    'description': 'Precios mayoristas oficiales de achuras, carne porcina (cerdo), menudencias vacunas y cortes especiales de VACUUM Carnicería en Buenos Aires.',
    'numberOfItems': listaPreciosMayoristas.length,
    'itemListElement': listaPreciosMayoristas.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': item.nombre,
        'description': item.descripcion,
        'category': item.categoria,
        'offers': {
          '@type': 'Offer',
          'price': item.precio ? item.precio.toString() : '0',
          'priceCurrency': 'ARS',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': item.precio ? item.precio.toString() : '0',
            'priceCurrency': 'ARS',
            'unitText': item.unidad
          },
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'LocalBusiness',
            'name': 'VACUUM Carnicería',
            'telephone': '+5491126549565',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Av. Pres. Perón 1747',
              'addressLocality': 'El Palomar',
              'addressRegion': 'Buenos Aires',
              'addressCountry': 'AR'
            }
          }
        }
      }
    }))
  }), []);

  // SEO Hook
  useSEO({
    title: 'Lista de Precios Mayorista | Cortes Vacunos al Vacío, Media Res, Cerdo y Achuras | VACUUM Carnicería',
    description: 'Precios mayoristas de cortes vacunos al vacío (asado, vacío, lomo, bife de chorizo), media res (novillo, vaquillona, overo), carne porcina, achuras y menudencias. VACUUM Carnicería, directo de frigorífico en Buenos Aires.',
    keywords: 'cortes vacunos al vacío precio, asado al vacío mayorista, vacío precio, lomo vacuno, bife de chorizo mayorista, media res mayorista precio, media res novillo, media res vaquillona, media res overo, lista de precios carnicería, precios mayoristas cerdo, precios mayoristas achuras, vacuum carniceria precios',
    canonical: 'https://vacuumcarniceria.com.ar/lista-de-precios',
    schema: structuredSchema
  });

  // Filtro y ordenamiento
  const filteredProducts = useMemo(() => {
    let result = listaPreciosMayoristas.filter(product => {
      const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.descripcion && product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todos' || product.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => (a.precio || 999999) - (b.precio || 999999));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (b.precio || 0) - (a.precio || 0));
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const formatPrice = (price) => {
    if (price === null || price === undefined) return 'Consultar';
    return `$ ${price.toLocaleString('es-AR')},00`;
  };

  const getWhatsAppItemUrl = (product) => {
    const text = encodeURIComponent(
      `Hola VACUUM Carnicería, quisiera consultar stock y hacer un pedido mayorista de ${product.nombre} (${formatPrice(product.precio)} / ${product.unidad}).`
    );
    return `https://wa.me/5491126549565?text=${text}`;
  };

  const globalWhatsAppUrl = `https://wa.me/5491126549565?text=${encodeURIComponent(
    'Hola VACUUM Carnicería, quisiera recibir asesoramiento y hacer un pedido mayorista con la lista de precios oficial.'
  )}`;

  return (
    <div className="pricing-page">
      {/* Hero Banner */}
      <header className="page-hero pricing-hero">
        <div className="container">
          <span className="section-tag">Venta Mayorista Directa</span>
          <h1 className="page-hero-title">Lista de Precios Mayoristas</h1>
          <p className="page-hero-subtitle" style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.6rem', maxWidth: '660px', marginInline: 'auto' }}>
            Cortes vacunos al vacío, media res, achuras, menudencias y carne porcina con calidad frigorífica
          </p>

          <div className="pricing-hero-actions">
            <a 
              href="/lista-de-precios-vacunos-vacuum.pdf" 
              download="Lista_De_Precios_Vacunos_Vacuum.pdf" 
              className="btn btn-primary"
              title="Descargar lista oficial de Cortes Vacunos al Vacío en PDF"
            >
              <Download size={18} />
              PDF Vacunos
            </a>

            <a 
              href="/lista-de-precios-mayorista-vacuum.pdf" 
              download="Lista_De_Precios_Achuras_Vacuum.pdf" 
              className="btn btn-outline"
              title="Descargar lista oficial de Achuras en PDF"
            >
              <Download size={18} />
              PDF Achuras
            </a>

            <a 
              href="/lista-de-precios-cerdo-vacuum.pdf" 
              download="Lista_De_Precios_Cerdo_Vacuum.pdf" 
              className="btn btn-outline"
              title="Descargar lista oficial de Cerdo en PDF"
            >
              <Download size={18} />
              PDF Cerdo
            </a>

            <a 
              href={globalWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              title="Contactar ventas mayoristas"
            >
              <WhatsAppIcon size={18} color="#ffffff" />
              Pedir por WhatsApp 24 hs
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pricing-section">
        <div className="container">

          {/* Controls Bar: Search, Categories, Sort, View */}
          <div className="pricing-toolbar-card">
            <div className="toolbar-top-row">
              {/* Search */}
              <div className="search-input-wrap">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Buscar achura, cerdo, corte o menudencia (ej. Bondiola, Pechito, Molleja)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  aria-label="Buscar producto en la lista de precios"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="search-clear-btn"
                    aria-label="Limpiar búsqueda"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Sort selector */}
              <div className="sort-wrap">
                <ArrowUpDown size={16} className="sort-icon" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                  aria-label="Ordenar productos"
                >
                  <option value="default">Orden del catálogo</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="name-asc">Nombre: A - Z</option>
                </select>
              </div>

              {/* View mode toggle */}
              <div className="view-toggle-group" role="group" aria-label="Modo de visualización">
                <button
                  type="button"
                  className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                  aria-label="Ver como tabla"
                  title="Vista de tabla detallada"
                >
                  Tabla
                </button>
                <button
                  type="button"
                  className={`view-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  onClick={() => setViewMode('cards')}
                  aria-label="Ver como tarjetas"
                  title="Vista en tarjetas interactivas"
                >
                  Tarjetas
                </button>
              </div>
            </div>

            {/* Category tabs */}
            <div className="category-pills-wrap" role="tablist" aria-label="Filtrar por categoría">
              {categoriasPrecios.map((cat) => {
                const count = cat === 'Todos' 
                  ? listaPreciosMayoristas.length 
                  : listaPreciosMayoristas.filter(p => p.categoria === cat).length;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className="pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results feedback */}
          <div className="results-status-bar">
            <p>
              Mostrando <strong>{filteredProducts.length}</strong> de {listaPreciosMayoristas.length} productos
              {selectedCategory !== 'Todos' && ` en "${selectedCategory}"`}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
            <span className="last-update-tag">Precios Mayoristas Vigentes</span>
          </div>

          {/* Table View */}
          {viewMode === 'table' && (
            <div className="table-responsive-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ minWidth: '220px' }}>Artículo / Menudencia</th>
                    <th scope="col">Categoría</th>
                    <th scope="col" className="text-center">Unidad</th>
                    <th scope="col" className="text-right">Precio Mayorista</th>
                    <th scope="col" className="text-center" style={{ minWidth: '130px' }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr key={product.id}>
                        <td className="product-name-cell">
                          <div className="product-title-wrap">
                            <strong>{product.nombre}</strong>
                            {product.tipoAnimal && (
                              <span className="animal-type-badge">{product.tipoAnimal}</span>
                            )}
                          </div>
                          {product.pesoRango && (
                            <span className="product-peso-rango">Rango: {product.pesoRango}</span>
                          )}
                          {product.descripcion && (
                            <span className="product-description-sub">{product.descripcion}</span>
                          )}
                        </td>
                        <td>
                          <span className="category-badge">{product.categoria}</span>
                        </td>
                        <td className="text-center">
                          <span className="unit-badge">{product.unidad}</span>
                        </td>
                        <td className="text-right">
                          <span className={`price-value ${!product.precio ? 'price-consultar' : ''}`}>
                            {formatPrice(product.precio)}
                          </span>
                        </td>
                        <td className="text-center">
                          <a
                            href={getWhatsAppItemUrl(product)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-table-whatsapp"
                            title={`Consultar por ${product.nombre}`}
                            aria-label={`Pedir ${product.nombre} por WhatsApp`}
                          >
                            <WhatsAppIcon size={16} color="#ffffff" />
                            <span>Pedir</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="empty-results-cell">
                        <p>No se encontraron productos que coincidan con la búsqueda.</p>
                        <button 
                          onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
                          className="btn btn-outline"
                          style={{ marginTop: '1rem', padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
                        >
                          Restablecer filtros
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Cards View */}
          {viewMode === 'cards' && (
            <div className="pricing-cards-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <article key={product.id} className="pricing-card-item">
                    <div className="pricing-card-header">
                      <span className="category-badge">{product.categoria}</span>
                      {product.tipoAnimal && (
                        <span className="animal-type-badge">{product.tipoAnimal}</span>
                      )}
                    </div>

                    <h3 className="pricing-card-title">{product.nombre}</h3>
                    {product.pesoRango && (
                      <span className="product-peso-rango" style={{ marginBottom: '0.3rem' }}>Rango: {product.pesoRango}</span>
                    )}
                    <p className="pricing-card-desc">{product.descripcion}</p>

                    <div className="pricing-card-footer">
                      <div className="price-box">
                        <span className="price-number">{formatPrice(product.precio)}</span>
                        <span className="price-unit">por {product.unidad}</span>
                      </div>

                      <a
                        href={getWhatsAppItemUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-whatsapp"
                        aria-label={`Pedir ${product.nombre} por WhatsApp`}
                      >
                        <WhatsAppIcon size={18} color="#ffffff" />
                        <span>Pedir</span>
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <div className="empty-cards-state">
                  <p>No se encontraron productos que coincidan con la búsqueda.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
                    className="btn btn-outline"
                    style={{ marginTop: '1rem', padding: '0.5rem 1.2rem' }}
                  >
                    Restablecer filtros
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bottom Wholesale CTA */}
          <div className="pricing-cta-banner">
            <div className="cta-banner-content">
              <span className="section-tag">¿Es dueño de una parrilla, restaurante o carnicería?</span>
              <h2>Optimice el costo de su negocio con carne, cerdo y achuras de primera calidad</h2>
              <p>
                Consulte por pedidos semanales, planes de abastecimiento gastronómico continuo y bonificaciones por volumen.
              </p>
              <div className="cta-buttons-wrap">
                <a 
                  href={globalWhatsAppUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <WhatsAppIcon size={20} color="#ffffff" />
                  Contactar Asesor Mayorista
                </a>
                <a 
                  href="/lista-de-precios-vacunos-vacuum.pdf" 
                  download="Lista_De_Precios_Vacunos_Vacuum.pdf" 
                  className="btn btn-outline"
                >
                  <Download size={18} />
                  PDF Vacunos
                </a>
                <a 
                  href="/lista-de-precios-mayorista-vacuum.pdf" 
                  download="Lista_De_Precios_Achuras_Vacuum.pdf" 
                  className="btn btn-outline"
                >
                  <Download size={18} />
                  PDF Achuras
                </a>
                <a 
                  href="/lista-de-precios-cerdo-vacuum.pdf" 
                  download="Lista_De_Precios_Cerdo_Vacuum.pdf" 
                  className="btn btn-outline"
                >
                  <Download size={18} />
                  PDF Cerdo
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
