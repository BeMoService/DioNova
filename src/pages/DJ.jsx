import djImg from "../assets/DJ.jpg";        // <— nieuwe DJ-foto
// About/Model blijven hun eigen imports gebruiken

export default function DJ() {
  return (
    <section className="grid grid-2">
      <div className="col-image">
        <img
          src={djImg}
          alt="DJ Dio Nova"
          className="resp"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="col-text">
        <p style={{ lineHeight: 1.7 }}>
          Ik draai sets vol energie, verrassingen en sfeer.
          Met een mix van house, techno en urban weet ik elke zaal in beweging te krijgen.
          Of het nu een club, festival, café of privéfeest is, ik voel de vibe aan
          en bouw die met volle energie op tot het dak eraf gaat. 🔊
          Ik ben altijd in contact met het publiek en maak van elke set een beleving.
          Ik draai niet zomaar tracks, ik creëer momenten die mensen onthouden.
        </p>
        <a href="#/contact" className="btn" style={{ marginTop: 20 }}>
          Boek DJ Dio Nova
        </a>
      </div>
    </section>
  );
}
