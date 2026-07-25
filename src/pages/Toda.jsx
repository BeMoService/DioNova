import MediaFrame from "../components/MediaFrame.jsx";
import { PlaceholderBlocks, SecondaryMedia } from "../components/PageSideContent.jsx";
import { todaHeroImage, todaSecondaryImage } from "../config/media.js";

export default function Toda() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={todaHeroImage} alt="" label="Toda — afbeelding" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Toda</h1>
        <PlaceholderBlocks />
        <div className="content-slot content-slot--short" aria-label="Tekstblok — inhoud volgt" />
        <SecondaryMedia src={todaSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
