// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import DJ from "./pages/DJ.jsx";
import Model from "./pages/Model.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <div className="bg-ornament" />

      <header className="site-header">
        <div className="container header-inner">
          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/">Over mij</Link>
            <Link to="/dj">DJ</Link>
            <Link to="/model">Model</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

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
            <Route path="*" element={<About />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
