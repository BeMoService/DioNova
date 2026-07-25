export default function MediaFrame({ src, alt = "", label = "Afbeelding volgt" }) {
  return (
    <div className="ratio-4x5">
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
        />
      ) : (
        <div className="media-placeholder-fill">
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
