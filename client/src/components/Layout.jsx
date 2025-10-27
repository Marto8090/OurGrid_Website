import { Link, Outlet } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

export default function Layout() {
  const { audience } = useAudience();
  const base = audience === "municipality" ? "/m" : "/u";

  return (
    <div>
      <nav style={{ padding: 12, background: "#ffea00" }}>
        <Link to={`${base}/what-is-grid-congestion`}>What is grid congestion?</Link>{" | "}
        <Link to={`${base}/faq`}>FAQ</Link>{" | "}
        <Link to="/">← Back</Link>
      </nav>
      <Outlet />
    </div>
  );
}
