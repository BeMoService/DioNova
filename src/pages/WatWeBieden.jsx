import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import HeroSlogan from "../components/HeroSlogan.jsx";
import { homeHeroImage, homeSecondaryImage } from "../config/media.js";
import logoImage from "../assets/mimipadel-logo.png";

export default function WatWeBieden() {
  return (
    <section className="section">
      <div className="site-hero site-hero--logo">
        <img src={logoImage} alt="" className="site-hero__logo" aria-hidden="true" />
        <div className="site-hero__overlay">
          <HeroSlogan />
          <h1 className="site-headline site-headline--hero">BOEK NU JOUW PADELREIS naar Italië.</h1>
          <p className="lead-text lead-text--hero">
            Speel padel op de beste locaties en ontdek de heuvels tussen Umbrië en Toscane. Wij bieden de
            beste faciliteiten, werken samen met gekwalificeerde trainers en staan voor passie gecombineerd
            met het fijne Italiaanse leven.
          </p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="col-image">
          <MediaFrame src={homeHeroImage} alt="" label="Afbeelding volgt" />
        </div>

        <div className="col-text">
          <h2 className="page-title">Wat we bieden</h2>

          <div className="page-body">
            <p>
              Een compleet verzorgde reis, zo simpel als het klinkt, zo uitgebreid als het voelt. Bij
              mimi padel staat een persoonlijke touch bovenaan, wij zullen er alles aan doen zodat jij een
              onvergetelijke reis krijgt. Jouw ervaring staat centraal, wij bewegen wel mee. Of dit nou gaat
              om een extra padel les, die ene unieke leuke locale tip of juist het vervoer van en naar een
              wijnproeverij.
            </p>

            <ul className="feature-list">
              <li>Minimaal 1,5 training per dag.</li>
              <li>
                Verblijf in een hotel inclusief ontbijt, pal aan het prachtige Lago di Trasimeno, mét
                zwembad.
              </li>
              <li>Dagelijks een uitgebreid Italiaans lunch pakket.</li>
              <li>Spannende wedstrijden en toernooien.</li>
              <li>Wijnproeverij bij de lokale wijnboer met mogelijkheid tot shipping.</li>
            </ul>

            <h3 className="page-subtitle">Persoonlijke touch?</h3>
            <ul className="feature-list">
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
      </div>
    </section>
  );
}
