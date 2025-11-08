// src/pages/Model.jsx
import { useEffect, useState } from "react";

import m1 from "../assets/model/1.jpg";
import m2 from "../assets/model/2.jpg";
import m3 from "../assets/model/3.jpg";
import m4 from "../assets/model/4.jpg";
import m5 from "../assets/model/5.jpg";
import m6 from "../assets/model/6.jpg";
import m7 from "../assets/model/7.jpg";

const images = [m1, m2, m3, m4, m5, m6, m7];

export default function Model(){
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  return (
    <section className="grid grid-2">
      <div className="col-image">
        <div className="ratio-4x5" style={{ position:"relative" }}>
          <img
            src={images[index]}
            alt={`Model Dio Nova ${index+1}`}
            style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:12, userSelect:"none" }}
            draggable={false}
          />
          {/* klikzones */}
          <button onClick={prev} aria-label="Vorige" style={{
            position:"absolute", left:0, top:0, bottom:0, width:"40%",
            background:"transparent", border:"none", cursor:"pointer"
          }}/>
          <button onClick={next} aria-label="Volgende" style={{
            position:"absolute", right:0, top:0, bottom:0, width:"60%",
            background:"transparent", border:"none", cursor:"pointer"
          }}/>
        </div>

        {/* dots */}
        <ul style={{ display:"flex", gap:8, marginTop:12, listStyle:"none", padding:0 }}>
          {images.map((_, i) => (
            <li
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width:8, height:8, borderRadius:"50%",
                background: i === index ? "#d4af37" : "#979797",
                cursor:"pointer"
              }}
              aria-label={`Ga naar foto ${i+1}`}
            />
          ))}
        </ul>
      </div>

      <div className="col-text">
        <h1 className="page-title">Model</h1>
        <p>
          Ik werk aan shoots voor lifestyle, fashion en campagnes, maar ook voor videoclips en korte reels. Ik ben inzetbaar voor verschillende stijlen, thema’s en concepten, zoals editorials, lookbooks en branding visuals.
        </p>
        <p style={{ marginTop:16 }}>
          Mijn kracht is meebewegen met merken, artiesten en fotografen en samen beelden maken die een gevoel overbrengen. Met expressieve poses, clean styling en oog voor detail creëren we beelden die blijven hangen.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop:20 }}>
          Boek voor shoot
        </a>
      </div>
    </section>
  );
}
