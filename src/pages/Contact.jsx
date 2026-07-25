import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { contactHeroImage, contactSecondaryImage } from "../config/media.js";

export default function Contact() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={contactHeroImage} alt="" label="Contact — afbeelding" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Contact</h1>

        <div className="content-slot content-slot--lead" aria-label="Intro tekst volgt" />

        <div className="contact-lines">
          <div className="contact-line">
            <span className="contact-icon" aria-hidden>
              ✉
            </span>
            <span className="contact-placeholder">E-mail volgt</span>
          </div>
          <div className="contact-line">
            <span className="contact-icon" aria-hidden>
              ◎
            </span>
            <span className="contact-placeholder">Social / link volgt</span>
          </div>
        </div>

        <div className="content-slot content-slot--short" aria-label="Tekstblok — inhoud volgt" />
        <SecondaryMedia src={contactSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
