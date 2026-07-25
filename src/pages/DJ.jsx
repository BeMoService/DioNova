import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { tripHeroImage, tripVideo } from "../config/media.js";

export default function DJ() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={tripHeroImage} alt="" label="Reis-afbeelding" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Reizen</h1>

        <p className="lead-text">
          Wij organiseren padelreizen vanuit Nederland naar Italië.
        </p>

        <div className="route-list">
          <div className="route-item">
            <strong>Rotterdam → Perugia</strong>
            <span>Directe vlucht met Transavia</span>
          </div>
          <div className="route-item">
            <strong>Amsterdam → Florence</strong>
            <span>Vertrek vanaf Amsterdam (definitief later bevestigen)</span>
          </div>
        </div>

        <div className="content-slot content-slot--short" aria-label="Tekstblok — inhoud volgt" />

        <a href="#/contact" className="btn btn--spaced">
          Boek hier
        </a>

        <SecondaryMedia src={tripVideo} label="Video volgt" type="video" />
      </div>
    </section>
  );
}
