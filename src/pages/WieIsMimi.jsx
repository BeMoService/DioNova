import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { mimiHeroImage, mimiSecondaryImage } from "../config/media.js";

export default function WieIsMimi() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={mimiHeroImage} alt="" label="Mimi — afbeelding volgt" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Wie is Mimi?</h1>

        <div className="page-body">
          <p>
            Mijn neefje was nog te klein om mij Mirjam te noemen, Mimi klonk hem beter. Sindsdien noemen
            familie, vrienden en alle (padel) kennissen mij Mimi. Ik ben de oprichtster van mimi padel en
            woon samen met mijn partner aan het Trasimenomeer middenin Umbrië in &ldquo;La dolce Vita
            Italia&rdquo;.
          </p>
          <p>
            Als kind zijnde was ik erg fanatiek op de tennisbaan, gaf ik al tennisles aan buurtkinderen en
            stond ik met mijn meidenteam elk competitieseizoen bovenaan. Sinds ik zo&rsquo;n acht jaar
            geleden het padel heb ontdekt, ben ik mijn passie hiervoor gaan delen met anderen door
            competitie teams op te richten en toernooien te organiseren.
          </p>
          <p>
            Na mijn verhuizing van Deventer naar Italië ben ik deze passie niet verloren en me gaan richten
            op padelreizen in Italië, hier een nog onbekend fenomeen, maar waarvan iedereen om mij heen al
            zegt: &ldquo;Wat lijkt me dat fijn: het heerlijke Italiaanse leven gecombineerd met een
            energiek potje padel.&rdquo;
          </p>
          <p>
            Ik neem je mee naar de leukste plekken, stel je voor aan de beste trainers en laat je proeven
            van mijn huisgemaakte Mimicello (Limoncello maar dan van sinaasappels). Midden in mijn tuin vol
            olijfbomen geniet ik van het Italiaanse leven, waarbij ik vooral blijf zoeken naar de beste
            plekken om met jou te kunnen delen.
          </p>
        </div>

        <SecondaryMedia src={mimiSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}
