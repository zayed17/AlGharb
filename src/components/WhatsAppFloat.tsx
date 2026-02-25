'use client';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '971581366135';
const defaultMessage = "Hello, I'd like to inquire about your services.";
const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 rounded-full bg-customGreen shadow-xl hover:bg-green-600 transition-colors w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ring-2 ring-white"
    >
      <FaWhatsapp className="text-white text-2xl md:text-3xl" />
    </a>
  );
}

