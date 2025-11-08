// src/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/About.jsx";
import DJ from "./pages/DJ.jsx";
import Model from "./pages/Model.jsx";
import Contact from "./pages/Contact.jsx";

export default function App(){
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <div className="inner">
            <h2>Dio Nova</h2>
            {/* subtitel bewust verwijderd */}
          </div>
        </section>

        <div className="section">
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/dj" element={<DJ/>} />
            <Route path="/model" element={<Model/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<About/>} />
          </Routes>
        </div>
      </main>
    </>
  );
}

function Header(){
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close  = () => setOpen(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  },[]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Desktop nav UIT via CSS (.nav-desktop display:none) */}
        <nav className="nav-desktop">
          <Link to="/">Over mij</Link>
          <Link to="/dj">DJ</Link>
          <Link to="/model">Model</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Hamburger */}
        <button className={`hamburger ${open ? "open":""}`} onClick={toggle} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Drawer */}
      <div className={`scrim ${open ? "" : "hidden"}`} onClick={close} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav style={{ display:"flex", flexDirection:"column", gap:10 }}>
          <Link to="/" onClick={close}>Over mij</Link>
          <Link to="/dj" onClick={close}>DJ</Link>
          <Link to="/model" onClick={close}>Model</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
        </nav>
      </aside>
    </header>
  );
}
