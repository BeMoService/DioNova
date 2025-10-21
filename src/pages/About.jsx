import aboutImg from "../assets/dionova.jpg";

export default function About() {
  return (
    <section className="grid grid-2">
      <div className="col-image">
        <img src={aboutImg} alt="DioNova" className="resp" />
      </div>
      <div className="col-text">
        <p style={{ lineHeight: 1.7 }}>
          Heyy! Ik ben Dionicia Scholten, beter bekend als Dio Nova.
          Ik ben 20 jaar oud en afkomstig uit Delden. 🎧
          Ik ben DJ en model en ik zit altijd vol good vibes.
          Ik hou van lachen, nieuwe mensen ontmoeten en creatief bezig zijn.
          Achter de draaitafels en voor de camera werk ik met passie en een glimlach.
        </p>
      </div>
    </section>
  );
}
