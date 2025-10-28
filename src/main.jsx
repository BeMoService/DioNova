import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

// Pagina's
import About from "./pages/About";
import DJ from "./pages/DJ";
import Model from "./pages/Model";
import Contact from "./pages/Contact";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />     {/* <-- Over mij (home) */}
          <Route path="dj" element={<DJ />} />
          <Route path="model" element={<Model />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
