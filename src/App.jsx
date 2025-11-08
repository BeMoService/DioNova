// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import DJ from "./pages/DJ.jsx";
import Model from "./pages/Model.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  const links = [
    { to: "#/",       label: "Over mij" },
    { to: "#/dj",     label: "DJ" },
    { to: "#/model",  label: "Model" },
    { to: "#/contact",label: "Contact" },
  ];

  return (
    <>
      {/* vaste witte topbar */}
      <header style={{
        position:"sticky", top:0, zIndex:50, background:"#fff",
        borderBottom:"1px solid #eee"
      }}>
        <div style={{
          maxWidth:1024, margin:"0 auto", padding:"12px 20px",
          display:"flex", alignItems:"center"
        }}>
          <div style={{ fontWeight:600, letterSpacing:.3 }}>DioNova</div>

          {/* hamburger RECHTS */}
          <button
            aria-label="Open menu"
            onClick={toggle}
            className={open ? "hamburger open" : "hamburger"}
            style={{ marginLeft:"auto" }}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* overlay + drawer rechts */}
      <div className={open ? "scrim" : "scrim hidden"} onClick={close} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <button
          onClick={close}
          aria-label="Sluit"
          style={{ alignSelf:"flex-end", marginBottom:12 }}
          className={open ? "hamburger open" : "hamburger"}
        >
          <span></span><span></span><span></span>
        </button>

        <nav style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {links.map(({ to, label }) => (
            <a key={to} href={to} onClick={close}>{label}</a>
          ))}
        </nav>
      </aside>

      {/* pagina’s */}
      <main className="container" style={{ padding:"24px 20px 48px" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dj" element={<DJ />} />
          <Route path="/model" element={<Model />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
