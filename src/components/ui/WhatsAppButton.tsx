import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '919999999999'; // Placeholder, replace with actual
  const message = encodeURIComponent('Hi Webmacz, I want to discuss a project.');
  const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Message us on WhatsApp
      </span>
    </a>
  );
}
