// src/pages/DJ.jsx
import djImg from "../assets/dj.jpg";
import djVid from "../assets/dj.mp4";

export default function DJ(){
  return (
    <section className="grid grid-2">
      {/* Foto links */}
      <div className="col-image">
        <div className="ratio-4x5">
          <img
            src={djImg}
            alt="DJ Dio Nova"
            style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:12 }}
          />
        </div>
      </div>

      {/* Tekst rechts */}
      <div className="col-text">
        <h1 className="page-title">DJ</h1>

        <p>
          Ik draai sets vol energie, verrassingen en sfeer. Met een mix van house, techno en urban weet ik elke zaal in beweging te krijgen. Of het nu een club, festival, café of privéfeest is, ik voel de sfeer aan en bouw die met volle energie op tot het dak eraf gaat.
        </p>
        <p style={{ marginTop:16 }}>
          Onvoorspelbaar, energiek en altijd in contact met het publiek. Mijn sets zijn een beleving op zich. Ik draai niet zomaar tracks, ik creëer momenten die mensen niet vergeten.
        </p>

        <a href="#/contact" className="btn" style={{ marginTop:20 }}>
          Boek DJ Dio Nova
        </a>

        {/* Video kleiner onder de knop, staand gekaderd */}
        <div style={{ marginTop:24, maxWidth:420 }}>
          <div className="ratio-4x5">
            <video
              src={djVid}
              controls
              playsInline
              preload="metadata"
              style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:12 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
