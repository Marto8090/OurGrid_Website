import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    // ROOT PAGE WRAPPER FOR FULL SITE LAYOUT
    // MIN-HEIGHT ENSURES FOOTER STAYS AT BOTTOM
    // FLEX-COL STACKS HEADER -> MAIN -> FOOTER
    <div className="min-h-screen flex flex-col bg-[#4F2E39] text-[#F9F5F2]">
      
      {/* TOP NAVIGATION BAR */}
      <Header />

      <main className="flex-1 md:py-10">
        <Outlet />
      </main>

      {/* SITE FOOTER */}
      
      <Footer />
    </div>
  );
}
