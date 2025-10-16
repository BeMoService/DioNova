import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  const links = [
    { to: "/", label: "About", end: true },
    { to: "/dj", label: "DJ" },
    { to: "/model", label: "Model" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      {/* TOPBAR */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, width: "100%", height: 68,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid #e7e0d6",
          zIndex: 50
        }}
      >
        <div className="container" style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
          <strong style={{letterSpacing:.4}}>DioNova</strong>
          <nav style={{ display: "flex", gap: 10 }}>
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
                  transition: ".2s"
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* PAGE */}
      <main className="container" style={{ marginTop: 100, flex: 1 }}>
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
