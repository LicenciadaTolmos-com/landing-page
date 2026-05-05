const WHATSAPP_URL = "https://wa.me/51958085012?text=Hola%2C%20quiero%20informacion%20sobre%20enfermeria%20a%20domicilio%20en%20Lima.";

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-6 left-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl ring-4 ring-white transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-green-200 md:bottom-8 md:left-8"
    >
      <svg
        aria-hidden="true"
        className="h-9 w-9"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16.01 3.2c-7.05 0-12.78 5.67-12.78 12.65 0 2.23.59 4.41 1.72 6.33L3.2 28.8l6.81-1.73a12.93 12.93 0 0 0 6 1.5c7.05 0 12.78-5.68 12.78-12.66S23.06 3.2 16.01 3.2Zm0 23.22c-1.9 0-3.76-.5-5.38-1.46l-.39-.23-4.04 1.03 1.08-3.91-.26-.4a10.37 10.37 0 0 1-1.63-5.6c0-5.8 4.76-10.51 10.62-10.51 5.85 0 10.61 4.72 10.61 10.52 0 5.8-4.76 10.56-10.61 10.56Zm5.82-7.88c-.32-.16-1.9-.93-2.19-1.04-.3-.11-.51-.16-.72.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.57-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.72-1.71-.98-2.34-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.02 1.29 3.23c.16.21 2.23 3.37 5.4 4.72.76.32 1.35.51 1.81.66.76.24 1.45.21 1.99.13.61-.09 1.9-.77 2.16-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}

export default WhatsAppFloat;
