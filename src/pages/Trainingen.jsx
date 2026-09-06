import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { trainingHeroImage, trainingSecondaryImage } from "../config/media.js";

export default function Trainingen() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={trainingHeroImage} alt="" label="Training — afbeelding volgt" />
      </div>

      <div className="col-text">
        <h1 className="page-title">De trainingen</h1>
        <p className="page-tagline">IJzersterk trainen met maximaal plezier!</p>

        <div className="page-body">
          <p>
            Ontdek ons ijzersterke en energieke trainingsprogramma! Met veel passie en kennis hebben we een
            complete training ontwikkeld voor ieder niveau. Wij focussen ons volledig op jouw persoonlijke
            verbeterpunten. Samen gaan we doelgericht en vooral met veel plezier aan de slag om jou een nóg
            betere padeller te maken.
          </p>
          <p>
            Bij mimi padel speel en oefen je altijd met gelijkwaardige spelers. Wij staan voor uitdagende,
            op maat gemaakte sessies. Je krijgt les van toptrainers met de allerhoogste FITP-kwalificatie
            van de Italiaanse tennis- en padelfederatie. Zo haal je gegarandeerd het beste uit jezelf en
            word je een nóg betere padeller!
          </p>
          <p>
            Om dit niveau te bereiken moesten onze trainers een zwaar leer- en examineringstraject
            doorlopen via het (ISF) Istituto Superiore die Formazione en praktijkervaring hebben in de
            tweede categorie spelersniveau. Dit zijn de spelers op het één na hoogste niveau, zij spelen
            mee in het nationale team en behoren tot de beste spelers van het land.
          </p>
        </div>

        <SecondaryMedia src={trainingSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
