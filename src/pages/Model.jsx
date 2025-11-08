// src/pages/Model.jsx
import { useState, useEffect } from "react";

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
    const t = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <section className="grid grid-2">
      <div className="col-image">
        <div className="ratio-4x5" onClick={next}>
          <img src={images[index]} alt={`Model Dio Nova ${index+1}`} />
        </div>
      </div>

      <div className="col-text">
        <h1 className="page-title">Model</h1>
        <p>
          Ik werk aan shoots die variëren van lifestyle en fashion tot high-end campagnes. 
          Met mijn ervaring ben ik inzetbaar voor verschillende stijlen, thema’s en concepten — 
          of het nu gaat om editorials, lookbooks, korte reels of branding visuals.
        </p>
        <p style={{ marginTop:16 }}>
          Mijn kracht ligt in het meebewegen met merken, artiesten en fotografen 
          en samen beelden te maken die een gevoel overbrengen. 
          Met expressieve poses, clean styling en aandacht voor detail creëren we beelden die blijven hangen.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop:20 }}>Boek voor shoot</a>
      </div>
    </section>
  );
}
