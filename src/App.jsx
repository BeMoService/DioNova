import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About.jsx";
import DJ from "./pages/DJ.jsx";
import Toda from "./pages/Toda.jsx";
import Model from "./pages/Model.jsx";
import Contact from "./pages/Contact.jsx";

const PAGE_BY_PATH = {
  "/": "home",
  "/dj": "trips",
  "/toda": "toda",
  "/model": "gallery",
  "/contact": "contact",
};

export default function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.dataset.page = PAGE_BY_PATH[location.pathname] ?? "home";
  }, [location.pathname]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  const links = [
    { to: "#/", label: "Home" },
    { to: "#/dj", label: "Reizen" },
    { to: "#/toda", label: "Toda" },
    { to: "#/model", label: "Galerij" },
    { to: "#/contact", label: "Contact" },
  ];

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner container">
          <div className="brand-slot" aria-label="Merknaam volgt" />

          <button
            type="button"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            onClick={toggle}
            className={open ? "hamburger open" : "hamburger"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={open ? "scrim" : "scrim hidden"} onClick={close} aria-hidden={!open} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          onClick={close}
          aria-label="Sluit menu"
          className={`hamburger hamburger--light ${open ? "open" : ""}`}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="drawer-nav">
          {links.map(({ to, label }) => (
            <a key={to} href={to} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="container main-shell">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dj" element={<DJ />} />
          <Route path="/toda" element={<Toda />} />
          <Route path="/model" element={<Model />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span className="copyright-badge" aria-hidden="true">
          ©
        </span>
        <span>MiMipadel</span>
      </footer>
    </div>
  );
}
