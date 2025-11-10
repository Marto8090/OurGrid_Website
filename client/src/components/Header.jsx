import { useState } from "react";
import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { audience } = useAudience();

  // Logo destination:
  // municipality -> /m
  // user         -> /u
  // none         -> /
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
    text-[#F4B14A]
    font-medium
    tracking-wide
    pb-1
    border-b-2 border-transparent
    hover:text-white
    hover:border-[#F4B14A]
    hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
    transition-all
  `;

  // EXACT shared style for Switch audience (desktop + mobile)
  const switchAudienceClass = `
    inline-flex items-center justify-center
    px-4 py-2
    rounded-full
    border border-[#F4B14A]/70
    text-sm
    text-[#F4B14A]
    hover:bg-[#F4B14A]
    hover:text-[#4F2E39]
    transition-all
  `;

  return (
    <header className="sticky top-0 z-30 bg-[#4F2E39] text-[#F9F5F2]">
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
            filter: drop-shadow(0 0 6px rgba(244,177,74,0.4));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(244,177,74,0.9));
          }
        }
      `}</style>

      <div className="w-full h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between relative">
        {/* Left: logo + text as one unit */}
        <Link
          to={homePath}
          className="
            flex items-center gap-3
            group
            transition-all duration-300
            hover:scale-105
            hover:animate-[glowPulse_1.6s_ease-in-out_infinite]
          "
          onClick={() => setOpen(false)}
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
              font-semibold
              text-[#F4B14A]
              text-[22px] lg:text-[24px]
              transition-all duration-300
            "
          >
            OurGrid
          </span>
        </Link>

        {/* DESKTOP NAV (lg+) */}
        <div className="hidden lg:flex items-center gap-8">
          {hasAudience &&
            links.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={navLinkClass}
              >
                {link.label}
              </Link>
            ))}

          {/* Desktop: Switch audience -> "/" */}
          <Link to="/" className={switchAudienceClass}>
            Switch audience
          </Link>
        </div>

        {/* MOBILE/TABLET BURGER (shown < lg) */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(v => !v)}
          className="
            lg:hidden
            relative w-9 h-9
            flex items-center justify-center
            rounded-full
            border border-[#F4B14A]
            hover:bg-[#4F2E39]/70
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#F4B14A]/80
          "
        >
          <span
            className={`
              absolute h-0.5 w-5 rounded bg-[#F4B14A]
              transition-all duration-200
              ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 rounded bg-[#F4B14A]
              transition-all duration-200
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 rounded bg-[#F4B14A]
              transition-all duration-200
              ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}
            `}
          />
        </button>

        {/* MOBILE/TABLET DROPDOWN */}
        {open && (
          <div
            className="
              lg:hidden
              absolute
              right-0 top-14 mr-1
              w-72
              bg-[#4F2E39]
              border border-[#F4B14A]
              rounded-[20px]
              shadow-2xl shadow-[#000000]/40
              py-6 px-7
              flex flex-col gap-4
              menu-enter
            "
          >
            {hasAudience ? (
              links.map(link => (
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
                    active:bg-[#F4B14A]/10
                  `}
                >
                  {link.label}
                </Link>
              ))
            ) : (
              <p className="text-sm text-[#F4B14A]/80">
                Select your role to see more pages.
              </p>
            )}

            {/* Mobile: Switch audience -> "/" with same styles */}
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
