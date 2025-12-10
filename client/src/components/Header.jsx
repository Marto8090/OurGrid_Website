import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { audience, setAudience } = useAudience();
  const navigate = useNavigate();
  const location = useLocation();

  // 1. DETERMINE CURRENT AUDIENCE STATUS
  const isMuni = audience === "municipality";
  const hasAudience = audience === "municipality" || audience === "user";

  // 2. DETERMINE BASE PATHS
  const homePath = isMuni ? "/m" : audience === "user" ? "/u" : "/";
  const base = isMuni ? "/m" : "/u";

  const links = hasAudience
    ? [
        { label: "What is grid congestion?", to: `${base}/what-is-grid-congestion` },
        { label: "How OurGrid works", to: `${base}/how-ourgrid-works` },
        { label: "Dashboards", to: `${base}/dashboards` },
        { label: "FAQ", to: `${base}/faq` },
        { label: "Privacy policy", to: `${base}/privacy-policy` },
      ]
    : [];

  const navLinkClass = `
    text-[17px] text-[#4F2E39] font-semibold tracking-wide pb-1
    border-b-2 border-transparent hover:text-white hover:border-[#4F2E39]
    hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] transition-all
  `;

 
// --- NEW "SEGMENTED CONTROL" COMPONENT ---
  const AudienceSwitcher = ({ className = "" }) => {
    
    // Function to handle the switch logic
    const switchRole = (targetRole) => {
      if (audience === targetRole) return;
      const currentPath = location.pathname;
      let nextPath = "";

      if (currentPath === "/") {
        nextPath = targetRole === "municipality" ? "/m" : "/u";
      } else {
        if (targetRole === "municipality") {
          nextPath = currentPath.replace(/^\/u/, "/m");
        } else {
          nextPath = currentPath.replace(/^\/m/, "/u");
        }
      }

      if (setAudience) setAudience(targetRole);
      navigate(nextPath);
      setOpen(false);
    };

    return (
      <div
        className={`
          relative flex items-center 
          bg-[#4F2E39]/10 border border-[#4F2E39]/30
          rounded-full p-1 h-11 w-[290px]
          ${className}
        `}
      >
        {/* SLIDING BACKGROUND (The "Active" State) */}
        {/* We use translate-x-full to move it exactly 100% of its own width to the right */}
        <div
          className={`
            absolute top-1 bottom-1 left-1
            w-[calc(50%-4px)]
            bg-[#4F2E39] rounded-full shadow-sm
            transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isMuni ? "translate-x-full" : "translate-x-0"}
          `}
        />

        {/* BUTTON 1: RESIDENT */}
        <button
          onClick={() => switchRole("user")}
          className={`
            relative z-10 w-1/2 h-full flex items-center justify-center gap-2
            text-[15px] font-bold transition-colors duration-300
            ${!isMuni ? "text-[#F4B14A]" : "text-[#4F2E39] hover:text-[#4F2E39]/80"}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Resident
        </button>

        {/* BUTTON 2: MUNICIPALITY */}
        <button
          onClick={() => switchRole("municipality")}
          className={`
            relative z-10 w-1/2 h-full flex items-center justify-center gap-2
            text-[15px] font-bold transition-colors duration-300
            ${isMuni ? "text-[#F4B14A]" : "text-[#4F2E39] hover:text-[#4F2E39]/80"}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4 8 4v14" />
            <path d="M17 21v-8.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V21" />
          </svg>
          Municipality
        </button>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-[999] bg-[#F4B14A] text-[#4F2E39] shadow-md">
      <style>{`
        @keyframes menuDrop {
          from { transform: scaleY(0.85); opacity: 0; }
          to { transform: scaleY(1); opacity: 1; }
        }
        .menu-enter {
          animation: menuDrop 0.18s ease-out;
          transform-origin: top right;
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(255,255,255,0.3)); }
          50% { filter: drop-shadow(0 0 10px rgba(255,255,255,0.9)); }
        }
      `}</style>

      <div className="w-full h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between relative">
        {/* LOGO */}
        <Link
          to={homePath}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-105 hover:animate-[glowPulse_1.6s_ease-in-out_infinite]"
        >
          <img
            src={Logo}
            alt="OurGrid logo"
            className="h-9 w-9 lg:h-12 lg:w-12 object-contain rounded-xl transition-all duration-300"
          />
          <span className="font-extrabold text-[#F9F5F2] text-[22px] lg:text-[24px] drop-shadow-[0_2px_3px_rgba(79,46,57,0.8)] transition-all duration-300">
            OurGrid
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">
          {hasAudience &&
            links.map((link) => (
              <Link key={link.label} to={link.to} className={navLinkClass}>
                {link.label}
              </Link>
            ))}

          {/* DESKTOP SWITCHER */}
          <AudienceSwitcher />
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full border border-[#4F2E39] hover:bg-[#4F2E39]/20 transition-colors duration-200 focus:outline-none"
        >
          <span
            className={`absolute h-0.5 w-5 rounded bg-[#4F2E39] transition-all duration-200 ${
              open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded bg-[#4F2E39] transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded bg-[#4F2E39] transition-all duration-200 ${
              open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
          />
        </button>

        {/* MOBILE DROPDOWN MENU */}
        {open && (
          <div className="lg:hidden absolute right-0 top-14 mr-1 w-72 bg-[#F4B14A] border border-[#4F2E39] rounded-[20px] shadow-xl shadow-[#000000]/30 py-6 px-7 flex flex-col gap-4 menu-enter">
            {hasAudience ? (
              links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`${navLinkClass} w-full text-left px-2 py-1 rounded-md active:bg-[#4F2E39]/10`}
                >
                  {link.label}
                </Link>
              ))
            ) : (
              <p className="text-sm text-[#4F2E39]/80 text-center">
                Select your role below
              </p>
            )}

            <div className="w-full h-[1px] bg-[#4F2E39]/20 my-1" />

            {/* MOBILE SWITCHER (CENTERED) */}
            <div className="flex justify-center">
              <AudienceSwitcher className="w-full" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}