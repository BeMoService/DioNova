// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About.jsx";
import DJ from "./pages/DJ.jsx";
import Model from "./pages/Model.jsx";
import Contact from "./pages/Contact.jsx";

export default function App(){
  return (
    <HashRouter>
      <div className="bg-ornament" />

      <Header />

      <main className="container">
        <section className="hero">
          <div className="inner">
            <h2>Dio Nova</h2>
            <p>DJ • Model</p>
          </div>
        </section>

        <div className="section">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/dj" element={<DJ />} />
            <Route path="/model" element={<Model />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  );
}

function Header(){
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close  = () => setOpen(false);

  // ZIJBALK ITEMS (NL)
  const links = useMemo(() => ([
    { to: "#/",        label: "Over mij" },
    { to: "#/dj",      label: "DJ" },
    { to: "#/model",   label: "Model" },
    { to: "#/contact", label: "Contact" },
  ]),[]);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  },[]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Geen logo linksboven – op verzoek verwijderd */}
        <nav className="hide-mobile" style={{ display:"flex", gap:16 }}>
          {links.map(({to,label}) => (
            <a key={to} href={to} style={{ padding:"8px 10px", borderRadius:8, border:"1px solid transparent" }}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={toggle}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Drawer */}
      <div className={`scrim ${open ? "" : "hidden"}`} onClick={close} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {links.map(({ to, label }) => (
            <a key={to} href={to} onClick={close}>{label}</a>
          ))}
        </nav>
      </aside>
    </header>
  );
}
