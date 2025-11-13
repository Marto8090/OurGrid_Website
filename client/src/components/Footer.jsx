import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const { audience } = useAudience();
  const base = audience === "municipality" ? "/m" : "/u";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#4F2E39] text-[#F9F5F2] border-t-4 border-[#F4B14A] mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">

        {/* Header bar: "Links" */}
        <div className="border-b border-[#F4B14A] mb-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold tracking-wide py-1">
            Links
          </h2>
        </div>

        {/* LINKS + LOGO (now side by side on ALL sizes) */}
        <div className="flex flex-row items-start justify-between gap-6 mb-6">

          {/* Links list */}
          <nav className="space-y-2 text-sm md:text-base">
            <Link
              to={`${base}/what-is-grid-congestion`}
              className="block hover:text-[#F4B14A] transition-colors"
            >
              What is grid congestion?
            </Link>
            <Link
              to={`${base}/how-ourgrid-works`}
              className="block hover:text-[#F4B14A] transition-colors"
            >
              How OurGrid works?
            </Link>
            <Link
              to={`${base}/dashboards`}
              className="block hover:text-[#F4B14A] transition-colors"
            >
              Dashboards
            </Link>
            <Link
              to={`${base}/privacy-policy`}
              className="block hover:text-[#F4B14A] transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              to={`${base}/faq`}
              className="block hover:text-[#F4B14A] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Logo + brand (RIGHT SIDE ALWAYS) */}
          <div className="flex flex-col items-center gap-2 whitespace-nowrap">
            <div className="p-2 rounded-3xl bg-[#4F2E39] border border-[#F4B14A]/60 shadow-md shadow-black/30">
              <img
                src={Logo}
                alt="OurGrid logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover"
              />
            </div>
            <span className="text-2xl md:text-3xl font-semibold tracking-wide">
              OurGrid
            </span>
          </div>

        </div>

        {/* Bottom legal bar */}
        <div className="text-[11px] md:text-xs text-[#F9F5F2]/85 space-y-1 leading-snug">
          <p>All rights reserved © {year}</p>
          <p>Postadres: Example Netherlands BV, Example 000 0000 BZ Amsterdam</p>
          <p>KVCO00000005 | NL000000000000</p>
        </div>

      </div>
    </footer>
  );
}
