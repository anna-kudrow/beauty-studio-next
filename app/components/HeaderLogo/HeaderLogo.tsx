import { Link } from "react-router-dom";
import "./HeaderLogo.css";

export const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <Link href="/" className="logo__link">
        <span className="logo-link__upper">Boyarinova_studio</span>
        <span className="logo-link__bottom">Анастасия & Светлана</span>
      </Link>
    </div>
  );
};
