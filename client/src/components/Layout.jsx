import { Link, Outlet } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import Header from "../components/Header.jsx"; // 👈 add this

export default function Layout() {
  const { audience } = useAudience();
  const base = audience === "municipality" ? "/m" : "/u";

  return (
    <div className="min-h-screen flex flex-col">
      {/* New sticky header (logo + hamburger). Self-contained styles. */}
      <Header />

      {/* Your existing nav with audience-aware links (unchanged). */}
      <nav className="bg-[#ffea00] p-3 flex justify-center gap-4 font-medium text-gray-800">
        <Link
          to={`${base}/what-is-grid-congestion`}
          className="hover:underline hover:text-gray-900 transition-colors"
        >
          What is grid congestion?
        </Link>
        <span>|</span>
        <Link
          to={`${base}/faq`}
          className="hover:underline hover:text-gray-900 transition-colors"
        >
          FAQ
        </Link>
        <span>|</span>
        <Link
          to="/"
          className="hover:underline hover:text-gray-900 transition-colors"
        >
          ← Back
        </Link>
      </nav>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
