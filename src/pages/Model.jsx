import { useEffect, useState } from "react";
import { PlaceholderBlocks, SecondaryMedia } from "../components/PageSideContent.jsx";
import { galleryImages, gallerySecondaryImage } from "../config/media.js";

export default function Model() {
  const slides = galleryImages.length > 0 ? galleryImages : [null];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, [slides.length]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const current = slides[index];

  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <div className="ratio-4x5" style={{ position: "relative" }}>
          {current ? (
            <img
              src={current}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
                userSelect: "none",
              }}
              draggable={false}
            />
          ) : (
            <div className="media-placeholder-fill">
              <span>Galerij {index + 1}</span>
            </div>
          )}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Vorige"
                className="carousel-hit carousel-hit--prev"
              />
              <button
                type="button"
                onClick={next}
                aria-label="Volgende"
                className="carousel-hit carousel-hit--next"
              />
            </>
          )}
        </div>

        {slides.length > 1 && (
          <ul className="carousel-dots">
            {slides.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={i === index ? "is-active" : ""}
                  onClick={() => setIndex(i)}
                  aria-label={`Ga naar foto ${i + 1}`}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="col-text">
        <h1 className="page-title">Galerij</h1>
        <PlaceholderBlocks />
        <div className="content-slot content-slot--short" aria-label="Tekstblok — inhoud volgt" />
        <a href="#/contact" className="btn btn--spaced">
          Boek hier
        </a>
        <SecondaryMedia src={gallerySecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
