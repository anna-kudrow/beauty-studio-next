import { Link } from "react-router-dom";
import "./DesktopNav.css";
import { HashLink } from "react-router-hash-link";

function DesktopNav() {
  return (
    <nav className="desktop-menu">
      <ul className="desktop-menu__list">
        <li className="desktop-menu__item ">
          <Link href="/" className="desktop-menu__link">
            ГЛАВНАЯ
          </Link>
        </li>
        <li className="desktop-menu__item ">
          <HashLink smooth to="/#about" className="desktop-menu__link">
            О НАС
          </HashLink>
        </li>
        <li className="desktop-menu__item">
          <HashLink smooth to="/#portfolio" className="desktop-menu__link">
            ГАЛЕРЕЯ
          </HashLink>
        </li>
        <li className="desktop-menu__item">
          <HashLink smooth to="/#advantages" className="desktop-menu__link">
            ПРЕИМУЩЕСТВА
          </HashLink>
        </li>
        <li className="desktop-menu__item">
          <HashLink smooth to="/#achievments" className="desktop-menu__link">
            ДОСТИЖЕНИЯ
          </HashLink>
        </li>
        <li className="desktop-menu__item">
          <HashLink smooth to="/#services" className="desktop-menu__link">
            УСЛУГИ
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
