import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#4F2E39] text-[#F9F5F2]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
