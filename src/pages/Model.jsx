export default function Model() {
  return (
    <section className="grid grid-2">
      <div className="col-text">
        <p style={{ lineHeight: 1.7 }}>
          Ik werk aan shoots met karakter en beweging, van beauty en fashion tot lifestyle en editorial.
          Daarnaast ben ik inzetbaar voor video zoals videoclips, brand content, korte reels en behind the scenes.
          Ik werk graag samen met merken, artiesten en creators die een verhaal willen neerzetten met energie en sfeer.
          De focus ligt op sterke poses, clean styling en een relaxed ritme op set zodat we beelden maken die blijven hangen.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop: 20 }}>
          Boek voor shoot of clip
        </a>
      </div>
      <div className="col-image">
        <img src="/images/dionova.jpg" alt="DioNova model" className="resp" />
      </div>
    </section>
  );
}
