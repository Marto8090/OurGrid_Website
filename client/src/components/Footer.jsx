import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import Logo from "../assets/Logo.png";

export default function Footer() {
  // GET CURRENT AUDIENCE (RESIDENT OR MUNICIPALITY)
  const { audience } = useAudience();

  // SET THE BASE ROUTE DEPENDING ON AUDIENCE
  const base = audience === "municipality" ? "/m" : "/u";

  // CURRENT YEAR FOR COPYRIGHT
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#4F2E39] text-[#F9F5F2] border-t-4 border-[#F4B14A] mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">

        {/* SECTION TITLE */}
        <div className="border-b border-[#F4B14A] mb-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold tracking-wide py-1">
            Links
          </h2>
        </div>

        {/* MAIN ROW: LINKS + GLOWING LOGO */}
        <div className="flex flex-row items-start justify-between gap-6 mb-6">

          {/* NAVIGATION LINKS */}
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

          {/* LOGO + BRAND NAME (WITH GLOWING EFFECTS + CLICKABLE) */}
          <div className="flex flex-col items-center gap-2 whitespace-nowrap">

            {/* GLOWING LOGO BUTTON THAT LINKS BACK TO AUDIENCE LANDING PAGE */}
            <Link
              to={base}
              className="
                group
                p-2 rounded-3xl border border-[#F4B14A]/60
                shadow-md shadow-black/30
                transition-all
                hover:shadow-[#F4B14A] hover:shadow-lg
                hover:border-[#F4B14A]
              "
            >
              <img
                src={Logo}
                alt="OurGrid logo"
                className="
                  w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover
                  transition-all
                  group-hover:brightness-110
                  group-hover:drop-shadow-[0_0_8px_#F4B14A]
                "
              />
            </Link>

            {/* CLICKABLE BRAND TEXT WITH LIGHT GLOW */}
            <Link
              to={base}
              className="
                text-2xl md:text-3xl font-semibold tracking-wide
                transition-all
                hover:text-[#F4B14A]
                hover:drop-shadow-[0_0_6px_#F4B14A]
              "
            >
              OurGrid
            </Link>

          </div>

        </div>

        {/* BOTTOM LEGAL DETAILS */}
        <div className="text-[11px] md:text-xs text-[#F9F5F2]/85 space-y-1 leading-snug">
          <p>All rights reserved © {year}</p>
          <p>Postadres: Example Netherlands BV, Example 000 0000 BZ Amsterdam</p>
          <p>KVCO00000005 | NL000000000000</p>
        </div>

      </div>
    </footer>
  );
}
