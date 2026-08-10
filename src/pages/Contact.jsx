import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { contactHeroImage, contactSecondaryImage } from "../config/media.js";

const WHATSAPP_URL = "https://wa.me/31626744352";
const INSTAGRAM_URL = "https://www.instagram.com/mimi.padel/";

export default function Contact() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={contactHeroImage} alt="" label="Contact — afbeelding volgt" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Contactgegevens</h1>

        <div className="page-body">
          <p className="lead-text">
            Vragen over een reis, een eigen groep of iets anders? Neem gerust contact op — wij denken graag
            met je mee.
          </p>
        </div>

        <div className="contact-lines">
          <a href={WHATSAPP_URL} className="contact-line contact-line--link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-hidden>
              ☎
            </span>
            <span>
              Mirjam <strong>06-26744352</strong> (WhatsApp)
            </span>
          </a>

          <a href="mailto:mimipadel@gmail.com" className="contact-line contact-line--link">
            <span className="contact-icon" aria-hidden>
              ✉
            </span>
            <span>mimipadel@gmail.com</span>
          </a>

          <a
            href={INSTAGRAM_URL}
            className="contact-line contact-line--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" aria-hidden>
              ◎
            </span>
            <span>Instagram — @mimi.padel</span>
          </a>
        </div>

        <SecondaryMedia src={contactSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
