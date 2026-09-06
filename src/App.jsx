import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import WatWeBieden from "./pages/WatWeBieden.jsx";
import Reizen from "./pages/Reizen.jsx";
import Trainingen from "./pages/Trainingen.jsx";
import Clubs from "./pages/Clubs.jsx";
import WieIsMimi from "./pages/WieIsMimi.jsx";
import Contact from "./pages/Contact.jsx";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden.jsx";
import BackgroundShapes from "./components/BackgroundShapes.jsx";

const PAGE_BY_PATH = {
  "/": "aanbod",
  "/reizen": "reizen",
  "/trainingen": "trainingen",
  "/clubs": "clubs",
  "/mimi": "mimi",
  "/contact": "contact",
  "/voorwaarden": "voorwaarden",
};

export default function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.dataset.page = PAGE_BY_PATH[location.pathname] ?? "aanbod";
  }, [location.pathname]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  const links = [
    { to: "#/", label: "Wat we bieden" },
    { to: "#/reizen", label: "Onze reizen" },
    { to: "#/trainingen", label: "De trainingen" },
    { to: "#/clubs", label: "Onze clubs" },
    { to: "#/mimi", label: "Wie is Mimi" },
    { to: "#/contact", label: "Contactgegevens" },
    { to: "#/voorwaarden", label: "Algemene voorwaarden", legal: true },
  ];

  return (
    <div className="app-shell">
      <BackgroundShapes />
      <header className="site-header">
        <div className="header-inner container">
          <div className="brand-slot" aria-label="mimi padel">
            <span className="brand-name">mimi padel</span>
          </div>

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
          {links.map(({ to, label, legal }) => (
            <a key={to} href={to} onClick={close} className={legal ? "drawer-link--legal" : undefined}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="container main-shell">
        <Routes>
          <Route path="/" element={<WatWeBieden />} />
          <Route path="/reizen" element={<Reizen />} />
          <Route path="/trainingen" element={<Trainingen />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/mimi" element={<WieIsMimi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/voorwaarden" element={<AlgemeneVoorwaarden />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span className="copyright-badge" aria-hidden="true">
          ©
        </span>
        <span>mimi padel</span>
      </footer>
    </div>
  );
}
