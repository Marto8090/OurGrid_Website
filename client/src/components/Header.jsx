import { useState } from "react";
import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { audience } = useAudience();

  // Logo destination
  const homePath =
    audience === "municipality"
      ? "/m"
      : audience === "user"
      ? "/u"
      : "/";

  const hasAudience = audience === "municipality" || audience === "user";
  const base = audience === "municipality" ? "/m" : "/u";

  const links = hasAudience
    ? [
        { label: "What is grid congestion?", to: `${base}/what-is-grid-congestion` },
        { label: "How OurGrid works", to: `${base}/how-ourgrid-works` },
        { label: "Dashboards", to: `${base}/dashboards` },
        { label: "FAQ", to: `${base}/faq` },
        { label: "Privacy policy", to: `${base}/privacy-policy` },
      ]
    : [];

  // Shared link style (desktop + mobile)
  const navLinkClass = `
    text-[17px]
    text-[#4F2E39]
    font-semibold
    tracking-wide
    pb-1
    border-b-2 border-transparent
    hover:text-white
    hover:border-[#4F2E39]
    hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]
    transition-all
  `;

  // Shared style for "Switch audience"
  const switchAudienceClass = `
    inline-flex items-center justify-center
    px-4 py-2
    rounded-full
    border border-[#4F2E39]/70
    text-sm
    text-[#4F2E39]
    font-semibold
    hover:bg-[#4F2E39]
    hover:text-[#F4B14A]
    transition-all
  `;

  return (
    <header className="sticky top-0 z-30 bg-[#F4B14A] text-[#4F2E39] shadow-md">
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
          0%, 100% {
            filter: drop-shadow(0 0 4px rgba(255,255,255,0.3));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(255,255,255,0.9));
          }
        }
      `}</style>

      <div className="w-full h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between relative">
        {/* Logo + text */}
        <Link
          to={homePath}
          onClick={() => setOpen(false)}
          className="
            flex items-center gap-3
            group
            transition-all duration-300
            hover:scale-105
            hover:animate-[glowPulse_1.6s_ease-in-out_infinite]
          "
        >
          <img
            src={Logo}
            alt="OurGrid logo"
            className="
              h-9 w-9 lg:h-12 lg:w-12
              object-contain
              rounded-xl
              transition-all duration-300
            "
          />
          <span
            className="
              font-extrabold
              text-[#F9F5F2]
              text-[22px] lg:text-[24px]
              drop-shadow-[0_2px_3px_rgba(79,46,57,0.8)]
              transition-all duration-300
            "
          >
            OurGrid
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {hasAudience &&
            links.map((link) => (
              <Link key={link.label} to={link.to} className={navLinkClass}>
                {link.label}
              </Link>
            ))}

          <Link to="/" className={switchAudienceClass}>
            Switch audience
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
          className="
            lg:hidden
            relative w-9 h-9
            flex items-center justify-center
            rounded-full
            border border-[#4F2E39]
            hover:bg-[#4F2E39]/20
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#4F2E39]/60
          "
        >
          <span
            className={`
              absolute h-0.5 w-5 rounded bg-[#4F2E39]
              transition-all duration-200
              ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 rounded bg-[#4F2E39]
              transition-all duration-200
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 rounded bg-[#4F2E39]
              transition-all duration-200
              ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}
            `}
          />
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              lg:hidden
              absolute
              right-0 top-14 mr-1
              w-72
              bg-[#F4B14A]
              border border-[#4F2E39]
              rounded-[20px]
              shadow-xl shadow-[#000000]/30
              py-6 px-7
              flex flex-col gap-4
              menu-enter
            "
          >
            {hasAudience ? (
              links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`
                    ${navLinkClass}
                    w-full
                    text-left
                    px-2 py-1
                    rounded-md
                    active:bg-[#4F2E39]/10
                  `}
                >
                  {link.label}
                </Link>
              ))
            ) : (
              <p className="text-sm text-[#4F2E39]/80">
                Select your role to see more pages.
              </p>
            )}

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`${switchAudienceClass} mt-2`}
            >
              Switch audience
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
