// src/components/WhatsAppButton.jsx
import React from 'react';
import '../whatsappbutton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519999665452"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button animate-bounce"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;