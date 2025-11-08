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
          DJ Dio Nova draait energieke sets vol verrassingen en sfeer. Met een mix van house, techno en urban krijgt ze elke zaal in beweging. Of het nu een club, festival, café of privéfeest is, ze bouwt de sfeer op tot het dak eraf gaat.
        </p>
        <p style={{ marginTop:16 }}>
          Onvoorspelbaar, energiek en altijd in contact met het publiek. Haar sets zijn een beleving. Ze draait niet zomaar tracks maar creëert momenten die mensen onthouden.
        </p>

        <a href="#/contact" className="btn" style={{ marginTop:20 }}>Boek DJ Dio Nova</a>

        {/* Video klein, onder de knop */}
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
