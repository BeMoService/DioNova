// src/pages/About.jsx
export default function About(){
  return (
    <section className="grid grid-2">
      <div className="col-image">
        <div className="ratio-4x5">
          <img src="images/about.jpg" alt="Dio Nova" />
        </div>
      </div>

      <div className="col-text">
        <h1 className="page-title">Over mij</h1>
        <p>
          Ik ben Dionicia Scholten, half Antilliaans, half Nederlands, ik ben 20 jaar en ik woon in Overijssel.
        </p>
        <p style={{ marginTop:16 }}>
          Ik werk momenteel als DJ en model. Twee werelden die voor mij perfect samenkomen.
          Mensen omschrijven mij als spontaan, sociaal en iemand die altijd lacht. 
          Voor de camera voel ik me op mijn gemak en ik vind het leuk om met allerlei verschillende mensen samen te werken.
        </p>
        <p style={{ marginTop:16 }}>
          In de afgelopen periode heb ik onder andere gedraaid voor meer dan 3.000 bezoekers 
          en meegewerkt aan een videoclip van de Bankzitters. 
          Ervaringen die mij nog meer motivatie geven om verder te groeien.
        </p>
        <p style={{ marginTop:16 }}>
          Nieuwe ervaringen opdoen en mezelf blijven ontwikkelen vind ik belangrijk,
          zowel op het podium als daarbuiten.
        </p>
      </div>
    </section>
  );
}
