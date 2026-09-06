export default function HeroSlogan() {
  return (
    <div className="hero-slogan" aria-label="mimi padel — daar waar Padel en la dolce vita samenkomen">
      <p className="hero-slogan__brand">mimi padel</p>
      <div className="hero-slogan__rule" aria-hidden="true" />

      <p className="hero-slogan__text">
        <span className="hero-slogan__line hero-slogan__line--1">daar waar</span>
        <span className="hero-slogan__line hero-slogan__line--2">
          <span className="hero-slogan__highlight">Padel</span>
          <span className="hero-slogan__and"> en </span>
          <span className="hero-slogan__highlight hero-slogan__highlight--vita">la dolce vita</span>
        </span>
        <span className="hero-slogan__line hero-slogan__line--3">samenkomen.</span>
      </p>
    </div>
  );
}
