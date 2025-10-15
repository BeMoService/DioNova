import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  const navLinks = [
    { to: "/", label: "About" },
    { to: "/dj", label: "DJ" },
    { to: "/model", label: "Model" },
  ];

  const linkBase = {
    padding: "10px 18px",
    borderRadius: 6,
    fontWeight: 500,
    textDecoration: "none",
    transition: "0.25s",
  };

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 70,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            style={({ isActive }) => ({
              ...linkBase,
              color: isActive ? "#000" : "#fff",
              background: isActive ? "#fff" : "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
            })}
          >
            {label}
          </NavLink>
        ))}
      </header>

      {/* MAIN */}
      <main
        style={{
          flex: 1,
          marginTop: 100,
          maxWidth: 900,
          marginInline: "auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 0 40px rgba(0,0,0,0.3)",
          }}
        >
          <Outlet />
        </div>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          opacity: 0.7,
          marginTop: 60,
          padding: "20px 0 40px",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} DioNova
      </footer>
    </div>
  );
}
