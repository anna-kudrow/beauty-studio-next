import Link from "next/link";
import "./DesktopNav.css";

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
          <Link href="/#about" className="desktop-menu__link">
            О НАС
          </Link>
        </li>
        <li className="desktop-menu__item">
          <Link href="/#gallery" className="desktop-menu__link">
            ГАЛЕРЕЯ
          </Link>
        </li>
        <li className="desktop-menu__item">
          <Link href="/#advantages" className="desktop-menu__link">
            ПРЕИМУЩЕСТВА
          </Link>
        </li>
        <li className="desktop-menu__item">
          <Link href="/#achievments" className="desktop-menu__link">
            ДОСТИЖЕНИЯ
          </Link>
        </li>
        <li className="desktop-menu__item">
          <Link href="/#services" className="desktop-menu__link">
            УСЛУГИ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
