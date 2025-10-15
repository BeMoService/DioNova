import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import DJ from "./pages/DJ.jsx";
import Model from "./pages/Model.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="dj" element={<DJ />} />
          <Route path="model" element={<Model />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
