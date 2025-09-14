

export default function WhatsAppFloat({
  phone = "918479933012",
  message = "Hello!",
  tooltip = "Chat on WhatsApp",
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Tooltip */}
      <div className="absolute -top-10 right-0 translate-x-2 select-none">
        <div className="pointer-events-none whitespace-nowrap rounded-2xl bg-black/80 px-3 py-1 text-sm text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          {tooltip}
        </div>
      </div>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full shadow-xl ring-1 ring-black/5 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300/60 active:scale-95 transition"
      >
        {/* Ripple/Pulse */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" aria-hidden />

        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-7 w-7 fill-white drop-shadow"
          role="img"
          aria-hidden="true"
        >
          <path d="M128 24c-57.9 0-104.9 45.7-104.9 101.9 0 19.2 5.5 37.3 15 52.7L24 232l55.2-14.5c14.9 8.2 32.1 12.9 48.8 12.9 57.9 0 104.9-45.7 104.9-101.9C232.9 69.7 185.9 24 128 24zm0 182.8c-15.3 0-30.3-4.1-43.5-11.8l-3.1-1.8-32.7 8.6 8.8-31.4-2-3.2c-9.2-14.4-14-31-14-48.1 0-47 39.2-85.2 87.5-85.2s87.5 38.2 87.5 85.2-39.2 85.2-87.5 85.2zm48.9-61.7c-2.7-1.4-16-7.9-18.5-8.8-2.5-.9-4.3-1.4-6.1 1.4-1.8 2.7-7 8.8-8.6 10.6-1.6 1.8-3.2 2-5.9.7-2.7-1.4-11.5-4.2-21.8-13.4-8.1-7.2-13.6-16.2-15.2-18.9-1.6-2.7-.2-4.2 1.2-5.6 1.3-1.3 2.7-3.3 4-5 1.3-1.7 1.8-2.9 2.7-4.8.9-1.8.5-3.5-.2-4.9-.7-1.4-6.1-14.7-8.4-20.2-2.2-5.3-4.5-4.6-6.1-4.7-1.6-.1-3.5-.1-5.4-.1s-5 0-7.7 3.5c-2.7 3.5-10.1 9.8-10.1 23.9s10.4 27.7 11.9 29.6c1.5 1.9 20.4 31.2 49.4 42.9 6.9 3 12.3 4.8 16.5 6.1 6.9 2.2 13.2 1.9 18.1 1.2 5.5-.8 16.9-6.9 19.3-13.5 2.4-6.6 2.4-12.3 1.6-13.5-.8-1.2-2.5-1.9-5.2-3.3z" />
        </svg>

        {/* Mini badge */}
        <span className="pointer-events-none absolute -top-1 -right-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide shadow ring-1 ring-black/5">
          Chat
        </span>
      </a>
    </div>
  );
}
