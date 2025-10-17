const IconMail = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M22 8l-9.2 6.1a2 2 0 0 1-2.2 0L1.9 8" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconIg = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
  </svg>
);

export default function Contact() {
  return (
    <section className="grid" style={{ gap: 16 }}>
      <div>
        <h1>Boekingen & Contact</h1>
        <p style={{ lineHeight: 1.6 }}>
          Wil je <strong>Dio Nova</strong> boeken of samenwerken voor een shoot of event? 
          Neem direct contact op. Ik reageer altijd zo snel mogelijk.
        </p>

        <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
          <a
            href="mailto:Dioniciascholten3@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600 }}
          >
            <IconMail /> Dioniciascholten3@gmail.com
          </a>

          <a
            href="https://instagram.com/dionicia19_"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <IconIg /> @dionicia19_
          </a>
        </div>

        <p className="subtle" style={{ marginTop: 18, fontSize: 14 }}>
          Vermeld bij boekingen: datum, locatie, type event/shoot, verwachte duur en eventuele voorkeuren.
        </p>
      </div>
    </section>
  );
}
