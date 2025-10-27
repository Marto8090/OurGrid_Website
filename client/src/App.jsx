import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() { return <h1 style={{ padding: 24 }}>Home ✅</h1>; }
function About() { return <h1 style={{ padding: 24 }}>About ✅</h1>; }

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, background: "#ffe08a" }}>
        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
