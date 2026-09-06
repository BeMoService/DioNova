/** Decoratieve achtergrondvormen — puur visueel, geen interactie */
export default function BackgroundShapes() {
  return (
    <div className="bg-shapes" aria-hidden="true">
      <div className="bg-shape bg-shape--olive-lg" />
      <div className="bg-shape bg-shape--olive-md" />
      <div className="bg-shape bg-shape--gold" />
      <div className="bg-shape bg-shape--gold-sm" />
      <div className="bg-shape bg-shape--ring" />
      <div className="bg-shape bg-shape--arc" />
    </div>
  );
}
