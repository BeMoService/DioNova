import MediaFrame from "../components/MediaFrame.jsx";
import { PlaceholderBlocks, SecondaryMedia } from "../components/PageSideContent.jsx";
import { homeHeroImage, homeSecondaryImage } from "../config/media.js";

export default function About() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={homeHeroImage} alt="" label="Hero-afbeelding" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Home</h1>
        <PlaceholderBlocks />
        <div className="content-slot content-slot--short" aria-label="Tekstblok — inhoud volgt" />
        <SecondaryMedia src={homeSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
