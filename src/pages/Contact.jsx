// src/pages/Contact.jsx
export default function Contact(){
  return (
    <section className="grid grid-2">
      <div className="col-text">
        <h1 className="page-title">Contact</h1>
        <p>
          Wil je boeken of samenwerken voor een shoot of event? Neem direct contact op.
        </p>

        <p style={{ marginTop:16 }}>
          <span style={{ marginRight:8 }}>📧</span>
          <a href="mailto:Dioniciascholten3@gmail.com">Dioniciascholten3@gmail.com</a>
        </p>

        <p style={{ marginTop:8 }}>
          <span style={{ marginRight:8 }}>📷</span>
          <a href="https://www.instagram.com/dionicia19_" target="_blank" rel="noreferrer">@dionicia19_</a>
        </p>

        <p style={{ marginTop:16, color:"var(--muted)" }}>
          Vermeld bij boekingen: datum, locatie, type event of shoot, verwachte duur en voorkeuren.
        </p>
      </div>
    </section>
  );
}
