export default function DJ() {
  return (
    <section className="grid grid-2">
      <div>
        <h1 style={{ marginBottom: 12 }}>DJ Dio Nova</h1>
        <p style={{ lineHeight: 1.7 }}>
          Ik draai sets vol energie, verrassingen en sfeer.
          Met een mix van <strong>house</strong>, <strong>techno</strong> en <strong>urban</strong> weet ik elke zaal in beweging te krijgen.
          Of het nu een club, festival, café of privéfeest is —
          ik voel de vibe aan en bouw die met volle energie op tot het dak eraf gaat. 🔊 <br /><br />
          Onvoorspelbaar, energiek en altijd in contact met het publiek —
          mijn sets zijn een beleving op zich.
          Ik draai niet zomaar tracks, ik creëer momenten die mensen niet vergeten.
        </p>

        <a
          href="#/contact"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "12px 24px",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: 8,
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          Boek DJ Dio Nova
        </a>
      </div>
      <div>
        <img src="/images/dionova.jpg" alt="DJ Dio Nova" className="resp" />
      </div>
    </section>
  );
}
