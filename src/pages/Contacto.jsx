import React, { useState } from 'react';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <>
      {/* Page Hero */}
      <header className="page-hero">
        <div className="container">
          <span className="section-tag">Atención Personalizada</span>
          <h1 className="page-hero-title">Contacto</h1>
          <p className="page-hero-lead">
            En VACUUM Carnicería su satisfacción es nuestra máxima prioridad. Escríbanos o comuníquese por nuestros canales directos.
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact Form */}
            <div className="contact-form-card">
              <h2>Complete el siguiente formulario</h2>
              <p>Nos pondremos en contacto con usted a la brevedad para asesorarlo con su pedido.</p>

              {submitted && (
                <div style={{
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid #25D366',
                  color: '#ffffff',
                  padding: '1rem 1.25rem',
                  borderRadius: '6px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <CheckCircle2 size={24} color="#25D366" />
                  <span>¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">Nombre *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellido" className="form-label">Apellido *</label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Su apellido"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Correo electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="nombre@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono" className="form-label">Teléfono / Celular</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="+54 9 11 ..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">Mensaje o Pedido *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Escriba aquí los cortes requeridos, consulta sobre envíos o asesoramiento gastronómico..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  <Send size={18} />
                  {loading ? 'Enviando mensaje...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>

            {/* Right: Direct Contact Info */}
            <div className="contact-info-panel">
              <div style={{ marginBottom: '0.5rem' }}>
                <span className="section-tag">Medios Directos</span>
                <h3 style={{ fontSize: '1.5rem' }}>Canales de atención:</h3>
              </div>

              {/* WhatsApp */}
              <div className="info-item-card">
                <div className="info-icon-box whatsapp">
                  <WhatsAppIcon size={26} color="var(--color-whatsapp)" />
                </div>
                <div className="info-content">
                  <h3>WhatsApp</h3>
                  <p>
                    Pedidos 24 hs. al <br />
                    <a href="https://wa.me/5491131608396" target="_blank" rel="noopener noreferrer">
                      +54 9 11 3160-8396
                    </a>
                  </p>
                </div>
              </div>

              {/* Telefono */}
              <div className="info-item-card">
                <div className="info-icon-box">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h3>Teléfono</h3>
                  <p>
                    Líneas rotativas: <br />
                    <a href="tel:+541147536041">+54 (011) 4753 - 6041</a> / <a href="tel:+541147538081">8081</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item-card">
                <div className="info-icon-box">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h3>Correo Electrónico</h3>
                  <p>
                    <a href="mailto:admin@stockdecarnes.com">admin@stockdecarnes.com</a>
                    <br />
                    <a href="mailto:ganaderalasheras@gmail.com">ganaderalasheras@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Direccion */}
              <div className="info-item-card">
                <div className="info-icon-box">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h3>Planta Frigorífica</h3>
                  <p>
                    Calle 24 Buenos Aires Nº 4566/4658<br />
                    Villa Lynch, San Martín, Buenos Aires
                  </p>
                </div>
              </div>

              {/* Map Preview */}
              <div className="map-wrap">
                <iframe
                  title="Ubicación VACUUM Carnicería"
                  src="https://maps.google.com/maps?q=Calle%2024%20Buenos%20Aires%204566,%20Villa%20Lynch,%20San%20Martin,%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
