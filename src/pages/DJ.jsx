// src/pages/DJ.jsx
import djImg from "../assets/dj.jpg";
import djVid from "../assets/dj.mp4";

export default function DJ(){
  return (
    <>
      {/* Bovenste blok: exact zoals andere pagina's */}
      <section className="grid grid-2">
        <div className="col-image">
          <div className="ratio-4x5">
            <img src={djImg} alt="DJ Dio Nova" />
          </div>
        </div>
        <div className="col-text">
          <h1>DJ</h1>
          <p>
            DJ Dio Nova draait sets vol energie, verrassingen en sfeer. Met een mix van house, techno en urban
            weet ze elke zaal in beweging te krijgen. Of het nu een club, festival, café of privéfeest is,
            ze voelt de sfeer aan en bouwt die met volle energie op tot het dak eraf gaat.
          </p>
          <p style={{ marginTop:16 }}>
            Onvoorspelbaar, energiek en altijd in contact met het publiek: haar sets zijn een beleving op zich.
            Ze draait niet zomaar tracks, ze creëert momenten die mensen niet vergeten.
          </p>
          <a href="#/contact" className="btn" style={{ marginTop:20 }}>Boek DJ Dio Nova</a>
        </div>
      </section>

      {/* Video-blok: iets kleiner en onder het eerste blok */}
      <section className="container" style={{ marginTop:28 }}>
        <div className="ratio-16x9" style={{ maxWidth: "760px", margin: "0 auto" }}>
          <video
            src={djVid}
            poster={djImg}
            controls
            playsInline
            preload="metadata"
            style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:12 }}
          />
        </div>
      </section>
    </>
  );
}
