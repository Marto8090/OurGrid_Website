import { useState } from "react";
import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { audience } = useAudience();

  const base = audience === "municipality" ? "/m" : "/u";

  const links = [
    { label: "What is grid congestion?", to: `${base}/what-is-grid-congestion` },
    { label: "How OurGrid works", to: `${base}/how-ourgrid-works` },
    { label: "Dashboards", to: `${base}/dashboards` },
    { label: "FAQ", to: `${base}/faq` },
    { label: "Privacy policy", to: `${base}/privacy-policy` },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#4F2E39] text-[#F9F5F2]">
      {/* local CSS for the dropdown animation */}
      <style>{`
        @keyframes menuDrop {
          from {
            transform: scaleY(0.85);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .menu-enter {
          animation: menuDrop 0.18s ease-out;
          transform-origin: top right;
        }
      `}</style>

      <div className="mx-auto max-w-screen-sm h-14 px-4 flex items-center justify-between relative">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-2">
          <svg
            className="h-7 w-7 rounded"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="12" fill="#F4B14A" />
            <circle cx="12" cy="12" r="6" fill="#4F2E39" />
          </svg>
          <span className="font-semibold text-[#F4B14A] text-lg">OurGrid</span>
        </div>

        {/* Right: animated burger button */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
          className="
            relative w-9 h-9
            flex items-center justify-center
            rounded-full
            border border-[#F4B14A]
            hover:bg-[#4F2E39]/70
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#F4B14A]/80
          "
        >
          {/* 3 lines that transform into an X */}
          <span
            className={`
              absolute h-0.5 w-5 bg-[#F4B14A] rounded
              transition-all duration-200
              ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 bg-[#F4B14A] rounded
              transition-all duration-200
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 bg-[#F4B14A] rounded
              transition-all duration-200
              ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}
            `}
          />
        </button>

        {/* Dropdown menu (expands from top to bottom next to button) */}
        {open && (
          <div
            className="
              absolute
              right-0 top-14 mr-1
              w-72
              bg-[#4F2E39]
              border border-[#F4B14A]
              rounded-[20px]
              shadow-2xl shadow-[#000000]/40
              py-5 px-6
              flex flex-col gap-4
              menu-enter
            "
          >
            <p className="text-[12px] uppercase tracking-[0.16em] text-[#F4B14A]/90 mb-2">
              Navigation
            </p>

            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="
                  text-[20px]
                  text-[#F4B14A]
                  font-medium
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                  hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]
                  transition-all
                  hover:translate-x-1
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-2
                text-[20px]
                text-[#F4B14A]
                font-semibold
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]
                transition-all
                hover:-translate-x-1
                pt-2 border-t border-[#F4B14A]/40 mt-1
              "
            >
              <ArrowLeft className="w-6 h-6 text-[#F4B14A]" />
              Back to audience choice
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
