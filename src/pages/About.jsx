// src/pages/About.jsx
import aboutImg from "../assets/dionova.jpg";

export default function About(){
  return (
    <section className="grid grid-2">
      <div className="col-image">
        <div className="ratio-4x5">
          <img
            src={aboutImg}
            alt="Dio Nova"
            style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:12 }}
          />
        </div>
      </div>

      <div className="col-text">
        <h1 className="page-title">Over mij</h1>
        <p>
          Ik ben Dionicia Scholten, half Antilliaans en half Nederlands. Ik ben 20 jaar en ik woon in Overijssel.
        </p>
        <p style={{ marginTop:16 }}>
          Ik werk als DJ en model. Mensen omschrijven mij als spontaan en sociaal. Voor de camera voel ik me op mijn gemak en ik werk graag met verschillende mensen samen.
        </p>
        <p style={{ marginTop:16 }}>
          De afgelopen periode draaide ik voor meer dan 3.000 bezoekers en werkte ik mee aan een videoclip van de Bankzitters. Dat geeft mij nog meer motivatie om door te groeien.
        </p>
        <p style={{ marginTop:16 }}>
          Nieuwe ervaringen opdoen en mezelf blijven ontwikkelen vind ik belangrijk, zowel op het podium als daarbuiten.
        </p>
      </div>
    </section>
  );
}
