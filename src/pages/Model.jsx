export default function Model() {
  return (
    <section className="grid grid-2">
      <div>
        <h1 style={{ marginBottom: 12 }}>Model</h1>
        <p style={{ lineHeight: 1.7 }}>
          Shoots met karakter en beweging — van <strong>beauty/fashion</strong> en
          <strong> lifestyle</strong> tot <strong>editorial</strong>. Daarnaast inzetbaar voor
          <strong> video</strong>: <strong>videoclips</strong>, <strong>brand content</strong>, korte reels en
          behind-the-scenes. Samen met merken, artiesten en creators zet ik een verhaal neer met energie en sfeer. <br /><br />
          Focus: krachtige poses, clean styling en een relaxed set-ritme — zodat we beelden maken die blijven hangen.
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
          Boek voor shoot of clip
        </a>
      </div>
      <div>
        <img src="/images/dionova.jpg" alt="DioNova model" className="resp" />
      </div>
    </section>
  );
}
