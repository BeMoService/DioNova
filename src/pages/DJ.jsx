// src/pages/DJ.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import djImg from "../assets/dj.jpg";   // slide 1 (foto)
import djVid from "../assets/dj.mp4";   // slide 2 (video, ~5MB)

const media = [
  { type: "image", src: djImg, alt: "DJ Dio Nova" },
  { type: "video", src: djVid, poster: djImg, alt: "DJ Dio Nova video" },
];

export default function DJ() {
  const [idx, setIdx] = useState(0);
  const [muted, setMuted] = useState(true);      // ← start muted (verplicht voor autoplay)
  const vidRef = useRef(null);

  const startX = useRef(0);
  const endX = useRef(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % media.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + media.length) % media.length), []);

  // Auto-advance alleen op FOTO (video wacht op einde of user)
  useEffect(() => {
    const item = media[idx];
    if (item.type === "image") {
      const id = setInterval(next, 4000);
      return () => clearInterval(id);
    }
  }, [idx, next]);

  // Bij videoslide: reset, zet muted aan, en speel (autoplay muted)
  useEffect(() => {
    const item = media[idx];
    if (item.type === "video" && vidRef.current) {
      setMuted(true);
      try {
        vidRef.current.currentTime = 0;
        vidRef.current.muted = true;
        vidRef.current.play().catch(() => {});
      } catch {}
    }
  }, [idx]);

  const onEnded = useCallback(() => next(), [next]);

  // Tap-to-unmute knop
  const toggleMute = useCallback((e) => {
    e.stopPropagation(); // niet laten bubbelen naar klikzones
    if (!vidRef.current) return;
    const newMuted = !muted;
    setMuted(newMuted);
    vidRef.current.muted = newMuted;
    // user gesture → mag met audio spelen
    vidRef.current.play().catch(() => {});
  }, [muted]);

  // Swipe-events
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { endX.current   = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    const delta = startX.current - endX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
    startX.current = 0;
    endX.current = 0;
  };

  const item = media[idx];

  // Klikzones
  const zoneBase = useMemo(() => ({
    position: "absolute", top: 0, bottom: 0, width: "48%", cursor: "pointer",
    background: "linear-gradient(to right, rgba(0,0,0,0.02), rgba(0,0,0,0))",
  }), []);
  const leftZone  = useMemo(() => ({ ...zoneBase, left: 0 }), [zoneBase]);
  const rightZone = useMemo(() => ({
    ...zoneBase, right: 0,
    background: "linear-gradient(to left, rgba(0,0,0,0.02), rgba(0,0,0,0))",
  }), [zoneBase]);

  return (
    <section className="grid grid-2">
      <div
        className="col-image"
        style={{ position: "relative", userSelect: "none" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {item.type === "image" ? (
          <img
            key={`img-${idx}`}
            src={item.src}
            alt={item.alt}
            className="resp"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            onClick={next}
          />
        ) : (
          <div style={{ position: "relative" }}>
            <video
              key={`vid-${idx}`}
              ref={vidRef}
              src={item.src}
              poster={item.poster}
              className="resp"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
              controls
              playsInline
              muted={muted}
              onEnded={onEnded}
            />
            {/* Unmute-knop (rechtsonder) */}
            <button
              onClick={toggleMute}
              style={{
                position: "absolute", right: 12, bottom: 12, zIndex: 5,
                background: "rgba(0,0,0,.55)", color: "#fff",
                border: "1px solid rgba(255,255,255,.25)",
                borderRadius: 10, padding: "8px 10px",
                display: "flex", alignItems: "center", gap: 8,
                backdropFilter: "blur(4px)", cursor: "pointer"
              }}
              aria-label={muted ? "Geluid aan" : "Geluid uit"}
              title={muted ? "Geluid aan" : "Geluid uit"}
            >
              <span style={{ fontSize: 14 }}>{muted ? "🔇" : "🔊"}</span>
              <span style={{ fontSize: 14 }}>{muted ? "Unmute" : "Mute"}</span>
            </button>
          </div>
        )}

        {/* Klikzones */}
        <div role="button" aria-label="Vorige"  style={leftZone}  onClick={prev} />
        <div role="button" aria-label="Volgende" style={rightZone} onClick={next} />

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 10, left: 12, display: "flex", gap: 6 }}>
          {media.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              title={`Slide ${i + 1}`}
              style={{
                width: 9, height: 9, borderRadius: "50%",
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
          Ik draai sets vol energie, verrassingen en sfeer. Met een mix van house, techno en
          urban krijg ik elke zaal in beweging — club, festival, café of privéfeest. Ik voel
          de vibe en bouw die op tot het dak eraf gaat. Onvoorspelbaar, energiek en altijd in
          contact met het publiek: mijn sets zijn een beleving. Ik draai niet zomaar tracks,
          ik creëer momenten die blijven hangen.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop: 20 }}>
          Boek DJ Dio Nova
        </a>
      </div>
    </section>
  );
}
