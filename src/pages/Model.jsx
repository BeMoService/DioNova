// src/pages/Model.jsx
import { useEffect, useState, useCallback, useMemo } from "react";

import m1 from "../assets/model/1.jpg";
import m2 from "../assets/model/2.jpg";
import m3 from "../assets/model/3.jpg";
import m4 from "../assets/model/4.jpg";
import m5 from "../assets/model/5.jpg";
import m6 from "../assets/model/6.jpg";
import m7 from "../assets/model/7.jpg"; // nieuw

const images = [m1, m2, m3, m4, m5, m6, m7].filter(Boolean);

export default function Model() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % images.length);
  }, []);
  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [next]);

  // Styles voor klikzones en dots (inline om extra CSS te vermijden)
  const zoneBase = useMemo(
    () => ({
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "48%",
      cursor: "pointer",
      // subtiele overlay bij hover (heel zacht)
      background:
        "linear-gradient(to right, rgba(0,0,0,0.02), rgba(0,0,0,0))",
    }),
    []
  );
  const leftZone = useMemo(
    () => ({ ...zoneBase, left: 0 }),
    [zoneBase]
  );
  const rightZone = useMemo(
    () => ({ ...zoneBase, right: 0, background: "linear-gradient(to left, rgba(0,0,0,0.02), rgba(0,0,0,0))" }),
    [zoneBase]
  );

  return (
    <section className="grid grid-2">
      <div className="col-image" style={{ position: "relative", userSelect: "none" }}>
        {/* Afbeelding (klik = volgende) */}
        <img
          key={idx}
          src={images[idx]}
          alt="DioNova model"
          className="resp"
          style={{ aspectRatio: "4/5", objectFit: "cover" }}
          onClick={next}
        />

        {/* Klikzones */}
        <div
          role="button"
          aria-label="Vorige foto"
          style={leftZone}
          onClick={prev}
        />
        <div
          role="button"
          aria-label="Volgende foto"
          style={rightZone}
          onClick={next}
        />

        {/* Dots */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 12,
            display: "flex",
            gap: 6,
          }}
        >
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              title={`Foto ${i + 1}`}
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: i === idx ? "var(--gold)" : "rgba(0,0,0,.35)",
                border: "1px solid rgba(255,255,255,.6)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      <div className="col-text">
        <p style={{ lineHeight: 1.7 }}>
          Ik werk aan shoots met karakter en beweging, van beauty en fashion tot
          lifestyle en editorial. Daarnaast ben ik inzetbaar voor video zoals
          videoclips, brand content, korte reels en behind the scenes. Ik werk
          graag samen met merken, artiesten en creators die een verhaal willen
          neerzetten met energie en sfeer. De focus ligt op sterke poses, clean
          styling en een relaxed ritme op set zodat we beelden maken die blijven
          hangen.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop: 20 }}>
          Boek voor shoot of clip
        </a>
      </div>
    </section>
  );
}
