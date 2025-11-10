import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useAudience } from "../context/AudienceContext.jsx";

export default function Layout() {
  const { audience } = useAudience();
  // You might still use base later, but it's fine to keep for now
  const base = audience === "municipality" ? "/m" : "/u";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky header */}
      <Header />

      {/* Removed the yellow nav bar here */}

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
