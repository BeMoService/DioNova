import { useEffect, useRef } from "react";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import HeroSlogan from "../components/HeroSlogan.jsx";
import { homeSecondaryImage } from "../config/media.js";
import logoImage from "../assets/mimipadel-logo.png";

export default function WatWeBieden() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const sheetRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const hero = heroRef.current;
    const sheet = sheetRef.current;
    if (!page || !hero || !sheet) return;

    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      const vh = window.innerHeight;
      const pageBottom = page.getBoundingClientRect().bottom;
      const sheetTop = sheet.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, 1 - sheetTop / vh));

      if (pageBottom <= 0) {
        hero.style.visibility = "hidden";
        return;
      }

      hero.style.visibility = "visible";

      if (motionOk) {
        hero.style.opacity = String(1 - progress * 0.45);
        hero.style.transform = `scale(${1 - progress * 0.07})`;
        sheet.style.transform = `translateY(${(1 - progress) * 64}px) scale(${0.9 + progress * 0.1})`;
      } else {
        hero.style.opacity = "1";
        hero.style.transform = "none";
        sheet.style.transform = "none";
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={pageRef} className="home-page section">
      <div ref={heroRef} className="home-panel home-panel--hero">
        <div className="home-hero__logo">
          <img src={logoImage} alt="" className="home-hero__logo-img" />
        </div>

        <div className="home-hero__intro">
          <div className="home-hero__slogan">
            <HeroSlogan hideBrand />
          </div>
          <h1 className="site-headline site-headline--hero">BOEK NU JOUW PADELREIS naar Italië.</h1>
          <p className="lead-text lead-text--hero">
            Speel padel op de beste locaties en ontdek de heuvels tussen Umbrië en Toscane. Wij bieden de
            beste faciliteiten, werken samen met gekwalificeerde trainers en staan voor passie gecombineerd
            met het fijne Italiaanse leven.
          </p>
        </div>
      </div>

      <div className="home-panel home-panel--spacer" aria-hidden="true" />

      <div ref={sheetRef} className="home-panel home-panel--body home-content">
        <h2 className="page-title">Wat we bieden</h2>

        <div className="page-body">
          <p>
            Een compleet verzorgde reis, zo simpel als het klinkt, zo uitgebreid als het voelt. Bij mimi
            padel staat een persoonlijke touch bovenaan, wij zullen er alles aan doen zodat jij een
            onvergetelijke reis krijgt. Jouw ervaring staat centraal, wij bewegen wel mee. Of dit nou gaat om
            een extra padel les, die ene unieke leuke locale tip of juist het vervoer van en naar een
            wijnproeverij.
          </p>

          <ul className="feature-list feature-list--plain">
            <li>Minimaal 1,5 training per dag.</li>
            <li>
              Verblijf in een hotel inclusief ontbijt, pal aan het prachtige Lago di Trasimeno, mét zwembad.
            </li>
            <li>Dagelijks een uitgebreid Italiaans lunch pakket.</li>
            <li>Spannende wedstrijden en toernooien.</li>
            <li>Wijnproeverij bij de lokale wijnboer met mogelijkheid tot shipping.</li>
          </ul>

          <h3 className="page-subtitle">Persoonlijke touch?</h3>
          <ul className="feature-list feature-list--plain">
            <li>Op maat gemaakte excursie? Jij roept, wij draaien.</li>
            <li>Verblijven in een villa? Regelen wij voor je.</li>
            <li>Mee op reis zonder te paddelen? Vraag naar de korting.</li>
            <li>Hulp bij vliegtickets? Wij zijn ondertussen experts.</li>
            <li>
              Een eigen groep, met je kids of een heel andere data? Wij zijn bereikbaar via whatsapp.
            </li>
            <li>Nog andere wensen? Wij denken graag met je mee.</li>
          </ul>
        </div>

        <a href="#/reizen" className="btn btn--spaced">
          Bekijk onze reizen
        </a>

        <SecondaryMedia src={homeSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
