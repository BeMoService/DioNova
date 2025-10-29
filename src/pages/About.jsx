// src/pages/About.jsx
import aboutImg from "../assets/dionova.jpg";

export default function About() {
  return (
    <section className="grid grid-2">
      <div className="col-image">
        <img
          src={aboutImg}
          alt="Dionicia Scholten"
          className="resp"
          style={{ aspectRatio: "4/5", objectFit: "cover" }}
        />
      </div>

      <div className="col-text">
        <p>
          Ik ben Dionicia Scholten, half Antilliaans, half Nederlands, ik ben 20 jaar en ik woon in Overijssel.
        </p>
        <p style={{ marginTop: 16 }}>
          Ik werk momenteel als DJ en model — twee werelden die voor mij perfect samenkomen. Mensen omschrijven mij
          als spontaan, sociaal en iemand die altijd lacht. Voor de camera voel ik me op mijn gemak en ik vind het leuk
          om met allerlei verschillende mensen samen te werken.
        </p>
        <p style={{ marginTop: 16 }}>
          In de afgelopen periode heb ik onder andere gedraaid voor meer dan 3.000 bezoekers en meegewerkt aan een
          videoclip van de Bankzitters. Ervaringen die mij nog meer motivatie geven om verder te groeien.
        </p>
        <p style={{ marginTop: 16 }}>
          Nieuwe ervaringen opdoen en mezelf blijven ontwikkelen vind ik belangrijk — zowel op het podium als daarbuiten.
        </p>
      </div>
    </section>
  );
}
