import { NavLink, Outlet } from "react-router-dom";

const link = "px-3 py-2 rounded-md text-sm font-medium";
const active = "background: #000; color: #fff;";
const inactive = "border:1px solid #000; color:#000;";

export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div>
          <span style={{ opacity: .7, fontSize: 12 }}>DioNova</span>
          <h1 style={{ margin: "6px 0 0" }}>Official Site</h1>
        </div>
        <nav style={{ display: "flex", gap: 8 }}>
          <NavLink to="/" end
            style={({ isActive }) => ({ ...(isActive ? {} : {}), padding:"8px 12px", borderRadius:8, ...(isActive?{background:"#000",color:"#fff"}:{border:"1px solid #000",color:"#000"})})}>
            About
          </NavLink>
          <NavLink to="/dj"
            style={({ isActive }) => ({ padding:"8px 12px", borderRadius:8, ...(isActive?{background:"#000",color:"#fff"}:{border:"1px solid #000",color:"#000"})})}>
            DJ
          </NavLink>
          <NavLink to="/model"
            style={({ isActive }) => ({ padding:"8px 12px", borderRadius:8, ...(isActive?{background:"#000",color:"#fff"}:{border:"1px solid #000",color:"#000"})})}>
            Model
          </NavLink>
        </nav>
      </header>

      <main style={{ marginTop: 24 }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: 48, opacity: .6 }}>
        © {new Date().getFullYear()} DioNova
      </footer>
    </div>
  );
}
