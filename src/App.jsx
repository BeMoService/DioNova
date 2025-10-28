// src/App.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";

function PageHero() {
  const { pathname } = useLocation();
  const map = {
    "/":        { title: "Over mij", subtitle: "" },
    "/dj":      { title: "DJ",       subtitle: "" },
    "/model":   { title: "Model",    subtitle: "Shoots & videoclips" },
    "/contact": { title: "Contact",  subtitle: "Boekingen & samenwerkingen" },
  };
  const { title, subtitle } = map[pathname] || map["/"];
  return (
    <div className="hero">
      <div className="container inner">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : <span />}
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // <- DIT bepaalt de zijbalk-items (NL labels, incl. Over mij)
  const links = [
    { to: "#/",        label: "Over mij" },
    { to: "#/dj",      label: "DJ" },
    { to: "#/model",   label: "Model" },
    { to: "#/contact", label: "Contact" },
  ];

  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", position: "relative" }}>
      <div className="bg-ornament" />

      {/* TOPBAR */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, width: "100%", height: 68,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid var(--line)",
          zIndex: 80
        }}
      >
        <div className="container" style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
          {/* Logo (niet klikbaar) */}
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <img src={logo} alt="DioNova logo" style={{ height: 40, width: "auto" }} />
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <PageHero />

      {/* PAGINA-INHOUD */}
      <main className="container" style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="container" style={{ padding: "28px 0 40px", color: "var(--muted)", fontSize: 14 }}>
        © {new Date().getFullYear()} DioNova
      </footer>

      {/* OVERLAY + DRAWER */}
      <div className={`scrim ${open ? "" : "hidden"}`} onClick={close}></div>
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {links.map(({ to, label }) => (
            <a key={to} href={to} onClick={close}>{label}</a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
