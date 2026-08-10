import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { tripHeroImage, tripVideo } from "../config/media.js";

const WHATSAPP_URL = "https://wa.me/31626744352";

export default function Reizen() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={tripHeroImage} alt="" label="Reis-afbeelding volgt" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Onze reizen</h1>

        <div className="page-body">
          <p className="lead-text">Boek nu jouw ultieme padel ervaring in Italië.</p>

          <div className="trip-card">
            <h2 className="trip-card__title">OKTOBER 2026 – Zaterdag 17 t/m Woensdag 21</h2>
            <ul className="feature-list">
              <li>4 nachten in een 3* hotel aan het meer, mét zwembad</li>
              <li>Uitgebreid ontbijtbuffet</li>
              <li>4 ochtenden anderhalve uur training bij TODA inclusief drinken</li>
              <li>Sportieve wedstrijden/toernooien naast de training</li>
              <li>
                Vervoer van en naar het hotel vanaf het vliegveld in Italië (Perugia ± 30 min.)
              </li>
              <li>Dagelijks een sportieve doch Italiaanse lunch</li>
              <li>
                Persoonlijk welkom moment inclusief een huisgemaakt drankje in combinatie met de beste
                persoonlijke tips voor de omgeving
              </li>
              <li>Twee op maat gemaakte excursies in de middag en/of avond</li>
            </ul>
          </div>

          <p className="price-tag">Reserveer nu jouw padelreis voor slechts €899,-</p>

          <p className="note-text">
            Let op: wij bieden deze reis aan bij een afname van 4 – 12 personen. Voor grotere groepen
            vragen wij via whatsapp contact op te nemen.
          </p>
        </div>

        <a href={WHATSAPP_URL} className="btn btn--spaced" target="_blank" rel="noopener noreferrer">
          Reserveer via WhatsApp
        </a>

        <SecondaryMedia src={tripVideo} label="Video volgt" type="video" />
      </div>
    </section>
  );
}
