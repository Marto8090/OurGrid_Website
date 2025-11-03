import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";   // <-- only here

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // ← no trailing comma
