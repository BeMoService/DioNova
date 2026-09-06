import MediaFrame from "../components/MediaFrame.jsx";
import { termsHeroImage } from "../config/media.js";

export default function AlgemeneVoorwaarden() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={termsHeroImage} alt="" label="Afbeelding volgt" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Algemene voorwaarden</h1>

        <div className="page-body">
          <p className="lead-text">
            Hier vind je binnenkort de algemene voorwaarden van mimi padel. De volledige tekst wordt op dit
            moment opgesteld en verschijnt hier zodra deze definitief is.
          </p>

          <div className="legal-placeholder">
            <p>
              Heb je vragen over boekingen, annulering of andere voorwaarden? Neem gerust contact op via
              onze contactpagina — wij helpen je graag verder.
            </p>
          </div>
        </div>

        <a href="#/contact" className="btn btn--spaced">
          Naar contactgegevens
        </a>
      </div>
    </section>
  );
}
