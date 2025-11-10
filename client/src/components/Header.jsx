import { useState } from "react";
import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { audience } = useAudience();

  // audience === "municipality" -> /m, else /u
  const base = audience === "municipality" ? "/m" : "/u";

  const links = [
    { label: "What is grid congestion?", to: `${base}/what-is-grid-congestion` },
    { label: "How OurGrid works", to: `${base}/how-ourgrid-works` },
    { label: "Dashboards", to: `${base}/dashboards` },
    { label: "FAQ", to: `${base}/faq` },
    { label: "Privacy policy", to: `${base}/privacy-policy` },
    { label: "Back to audience choice", to: "/" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#4a2431] text-white">
      <div className="mx-auto max-w-screen-sm h-14 px-4 flex items-center justify-between">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-2">
          <svg
            className="h-7 w-7 rounded"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="12" fill="#ffea00" />
            <circle cx="12" cy="12" r="6" fill="#4a2431" />
          </svg>
          <span className="font-semibold text-[#ffea00]">OurGrid</span>
        </div>

        {/* Right: hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ffea00] hover:bg-white/10"
        >
          {open ? (
            // X icon
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Fullscreen overlay menu */}
      {open && (
        <div
          className="
            fixed inset-0 z-20
            bg-[#4a2431]/98
            flex flex-col items-center
            pt-20 gap-4
          "
        >
          <div
            className="
              w-[85%]
              max-w-sm
              border border-[#00a887]
              rounded-3xl
              px-6 py-5
              bg-[#4a2431]
              shadow-2xl
              flex flex-col gap-3
            "
          >
            <p className="text-sm uppercase tracking-[0.16em] text-[#ffea00]/80">
              Menu
            </p>
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="
                  text-base
                  text-white
                  hover:text-[#ffea00]
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
