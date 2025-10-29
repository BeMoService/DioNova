// src/pages/DJ.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import djImg from "../assets/dj.jpg";   // slide 1 (foto)
import djVid from "../assets/dj.mp4";   // slide 2 (video)

const media = [
  { type: "image", src: djImg, alt: "DJ Dio Nova" },
  { type: "video", src: djVid, poster: djImg, alt: "DJ Dio Nova video" },
];

export default function DJ() {
  const [idx, setIdx]   = useState(0);
  const [muted, setMuted] = useState(true); // start muted voor autoplay
  const vidRef = useRef(null);

  const next = useCallback(() => setIdx(i => (i + 1) % media.length), []);
  const prev = useCallback(() => setIdx(i => (i - 1 + media.length) % media.length), []);

  // Auto-advance alleen op foto
  useEffect(() => {
    if (media[idx].type !== "image") return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [idx, next]);

  // Als we video tonen: reset & autoplay (muted), playsInline voor mobiel
  useEffect(() => {
    if (media[idx].type !== "video" || !vidRef.current) return;
    try {
      setMuted(true);
      vidRef.current.currentTime = 0;
      vidRef.current.muted = true;
      vidRef.current.play().catch(() => {});
    } catch {}
  }, [idx]);

  const onEnded = useCallback(() => next(), [next]);

  // Tap-to-unmute
  const toggleMute = useCallback((e) => {
    e.stopPropagation();
    if (!vidRef.current) return;
    const m = !muted;
    setMuted(m);
    vidRef.current.muted = m;
    vidRef.current.play().catch(() => {});
  }, [muted]);

  // Swipe
  const sx = useRef(0), ex = useRef(0);
  const onTouchStart = (e) => (sx.current = e.touches[0].clientX);
  const onTouchMove  = (e) => (ex.current = e.touches[0].clientX);
  const onTouchEnd   = () => {
    const d = sx.current - ex.current;
    if (Math.abs(d) > 50) (d > 0 ? next() : prev());
    sx.current = ex.current = 0;
  };

  const zoneBase = useMemo(() => ({
    position: "absolute", top: 0, bottom: 0, width: "48%", cursor: "pointer",
    background: "linear-gradient(to right, rgba(0,0,0,0.02), rgba(0,0,0,0))",
  }), []);
  const leftZone  = useMemo(() => ({ ...zoneBase, left: 0 }), [zoneBase]);
  const rightZone = useMemo(() => ({
    ...zoneBase, right: 0,
    background: "linear-gradient(to left, rgba(0,0,0,0.02), rgba(0,0,0,0))",
  }), [zoneBase]);

  const item = media[idx];

  return (
    <section className="grid grid-2">
      {/* MEDIA met vast 4:5 frame (desktop én mobiel) */}
      <div
        className="col-image"
        style={{ position: "relative", userSelect: "none" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="media-frame ratio-4x5" onClick={item.type === "image" ? next : undefined}>
          {item.type === "image" ? (
            <img key={`img-${idx}`} src={item.src} alt={item.alt} />
          ) : (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <video
                key={`vid-${idx}`}
                ref={vidRef}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="metadata"
                muted={muted}
                onEnded={onEnded}
              />
              {/* Unmute/mute overlay */}
              <button
                onClick={toggleMute}
                style={{
                  position: "absolute", right: 12, bottom: 12, zIndex: 5,
                  background: "rgba(0,0,0,.55)", color: "#fff",
                  border: "1px solid rgba(255,255,255,.25)", borderRadius: 10,
                  padding: "8px 10px", display: "flex", alignItems: "center", gap: 8,
                  backdropFilter: "blur(4px)", cursor: "pointer",
                }}
                aria-label={muted ? "Geluid aan" : "Geluid uit"}
                title={muted ? "Geluid aan" : "Geluid uit"}
              >
                <span style={{ fontSize: 14 }}>{muted ? "🔇" : "🔊"}</span>
                <span style={{ fontSize: 14 }}>{muted ? "Unmute" : "Mute"}</span>
              </button>
            </div>
          )}
        </div>

        {/* Klikzones */}
        <div role="button" aria-label="Vorige slide" style={leftZone}  onClick={prev} />
        <div role="button" aria-label="Volgende slide" style={rightZone} onClick={next} />
      </div>

      {/* TEKST */}
      <div className="col-text">
        <p>
          DJ Dio Nova draait sets vol energie, verrassingen en sfeer. Met een mix van house, techno en urban weet ze
          elke zaal in beweging te krijgen. Of het nu een club, festival, café of privéfeest is — ze voelt de sfeer aan
          en bouwt die met volle energie op tot het dak eraf gaat.
        </p>
        <p style={{ marginTop: 16 }}>
          Onvoorspelbaar, energiek en altijd in contact met het publiek: haar sets zijn een beleving op zich. Ze draait
          niet zomaar tracks, ze creëert momenten die mensen niet vergeten.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop: 20 }}>
          Boek DJ Dio Nova
        </a>
      </div>
    </section>
  );
}
