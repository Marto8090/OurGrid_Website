import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    // Root page wrapper for full site layout
    <div className="min-h-screen flex flex-col bg-[#4F2E39] text-[#F9F5F2]">
      {/* Top navigation bar */}
      <Header />

      {/* Main content area where individual pages render */}
      {/* No padding here. Each page controls its own spacing. */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}
