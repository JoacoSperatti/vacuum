import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent('Hola VACUUM Carnicería, quisiera hacer un pedido o consulta.');
  const whatsappUrl = `https://wa.me/5491126549565?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer pedido por WhatsApp"
    >
      <WhatsAppIcon size={34} color="#ffffff" />
    </a>
  );
}
