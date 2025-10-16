export default function Contact() {
    return (
      <section className="grid" style={{ gap: 16 }}>
        <div>
          <h1>Boekingen & Contact</h1>
          <p style={{ lineHeight: 1.6 }}>
            Wil je DJ Dio Nova boeken of samenwerken voor een shoot of event? 
            Neem direct contact op — ik reageer altijd zo snel mogelijk ✨
          </p>
  
          <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
            <a
              href="mailto:booking@dionova.com"
              style={{ fontWeight: 600 }}
            >
              booking@dionova.com
            </a>
            <a
              href="https://instagram.com/dionova"
              target="_blank"
              rel="noreferrer"
            >
              Instagram @dionova
            </a>
          </div>
  
          <p className="subtle" style={{ marginTop: 18, fontSize: 14 }}>
            Boekingen: vermeld datum, locatie, type event en eventuele voorkeuren.  
            Laten we er samen iets bijzonders van maken!
          </p>
        </div>
      </section>
    );
  }
  