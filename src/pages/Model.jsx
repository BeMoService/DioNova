import { useEffect, useState } from "react";

// Slides uit /public/images/model/1..6.jpg
const images = [
  "/images/model/1.jpg",
  "/images/model/2.jpg",
  "/images/model/3.jpg",
  "/images/model/4.jpg",
  "/images/model/5.jpg",
  "/images/model/6.jpg", // haal weg als je er 5 hebt
];

export default function Model() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="grid grid-2">
      <div className="col-image" style={{ position: "relative" }}>
        <img
          key={idx}
          src={images[idx]}
          alt="DioNova model"
          className="resp"
          style={{ aspectRatio: "4/5", objectFit: "cover" }}
          onError={(e) => (e.currentTarget.style.display = "none")}
          onLoad={(e) => (e.currentTarget.style.display = "block")}
        />
        <div style={{ position: "absolute", bottom: 10, left: 12, display:"flex", gap:6 }}>
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              title={`Foto ${i+1}`}
              style={{
                width: 9, height: 9, borderRadius: "50%",
                background: i === idx ? "var(--gold)" : "rgba(0,0,0,.35)",
                border: "1px solid rgba(255,255,255,.6)",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      </div>

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
    </section>
  );
}
