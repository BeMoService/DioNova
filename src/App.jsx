import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  const linkStyle = {
    padding: "10px 18px",
    borderRadius: 6,
    fontWeight: 500,
    textDecoration: "none",
    transition: "0.2s",
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#111" }}>
      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 60,
          background: "#fff",
          borderBottom: "1px solid #e5e5e5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          zIndex: 100,
        }}
      >
        {["/", "/dj", "/model"].map((path, i) => {
          const names = ["About", "DJ", "Model"];
          return (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              style={({ isActive }) => ({
                ...linkStyle,
                color: isActive ? "#fff" : "#000",
                background: isActive ? "#000" : "transparent",
                border: isActive ? "1px solid #000" : "1px solid #000",
              })}
            >
              {names[i]}
            </NavLink>
          );
        })}
      </header>

      {/* MAIN CONTENT */}
      <main
        style={{
          marginTop: 100,
          maxWidth: 900,
          marginInline: "auto",
          padding: "0 24px",
          lineHeight: 1.6,
        }}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          opacity: 0.6,
          marginTop: 80,
          padding: "20px 0 40px",
          borderTop: "1px solid #eee",
        }}
      >
        © {new Date().getFullYear()} DioNova
      </footer>
    </div>
  );
}
