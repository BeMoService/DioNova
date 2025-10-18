import { NavLink, Outlet, useLocation } from "react-router-dom";

function PageHero() {
  const { pathname } = useLocation();
  // Subtitel alleen tonen bij Model en Contact
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
  const links = [
    { to: "/", label: "Over mij", end: true },
    { to: "/dj", label: "DJ" },
    { to: "/model", label: "Model" },
    { to: "/contact", label: "Contact" },
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
          zIndex: 50
        }}
      >
        <div className="container" style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
          <strong style={{letterSpacing:.4}}>DioNova</strong>
          <nav className="topnav" style={{ display: "flex", gap: 10 }}>
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                style={({ isActive }) => ({
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "1px solid var(--line)",
                  background: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "#fff" : "var(--ink)",
                  fontWeight: 500,
                  transition: "all .25s ease",
                  cursor: "pointer"
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <PageHero />

      {/* PAGE */}
      <main className="container" style={{ flex: 1 }}>
        <div className="card">
          <Outlet />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="container" style={{ padding: "28px 0 40px", color: "var(--muted)", fontSize: 14 }}>
        © {new Date().getFullYear()} DioNova
      </footer>
    </div>
  );
}
