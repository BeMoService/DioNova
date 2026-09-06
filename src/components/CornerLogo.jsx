import { createPortal } from "react-dom";
import logoImage from "../assets/mimipadel-logo.png";

export default function CornerLogo() {
  return createPortal(
    <a href="#/" className="corner-logo" aria-label="mimi padel — naar home">
      <img src={logoImage} alt="" className="corner-logo__img" />
    </a>,
    document.body
  );
}
