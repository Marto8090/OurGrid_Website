import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F5F2] text-[#4F2E39]">
      {/* Golden header */}
      <Header />

      {/* Page content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
