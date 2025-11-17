import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    // Root page wrapper for full site layout
    <div className="min-h-screen flex flex-col bg-[#4F2E39] text-[#F9F5F2]">
      {/* Top navigation bar */}
      <Header />

      <main className="flex-1 md:py-10">
        <Outlet />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}
