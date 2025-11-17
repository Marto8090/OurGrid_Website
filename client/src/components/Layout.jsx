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

<<<<<<< HEAD
      <main className="flex-1 py-6 md:py-10">
=======
      {/* MAIN CONTENT AREA WHERE INDIVIDUAL PAGES RENDER */}
      {/* OUTLET = WHERE CHILD ROUTES SHOW UP */}
      <main className="flex-1 px-4 py-6 md:px-8 md:py-10">
>>>>>>> ab2361991e9246125beb8714ed33b1c9d7778e39
        <Outlet />
      </main>

      {/* SITE FOOTER */}
      
      <Footer />
    </div>
  );
}
