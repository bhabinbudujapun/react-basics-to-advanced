import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="p-4 bg-sky-400 text-center font-bold text-white">React Router</h1>
  </StrictMode>
);
