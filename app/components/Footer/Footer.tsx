import { Link } from "react-router-dom";
import "./footer.css";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <Link href="/" className="logo__link logo__link-footer">
            <span className="logo-link__upper logo-link__upper-footer">
              Boyarinova_studio
            </span>
            <span className="logo-link__bottom">Анастасия &Светлана</span>
          </Link>
        </div>
        <div className="footer__content">
          <nav className="footer__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <HashLink href="/" className="nav__item">
                  Главная
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink smooth to="/#about" className="nav__link">
                  О нас
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink smooth to="/#gallery" className="nav__link">
                  Фотогалерея
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink smooth to="/#services" className="nav__link">
                  Услуги
                </HashLink>
              </li>
            </ul>
          </nav>
          <div className="footer__social-media">
            <ul className="social-media__list">
              <li className="social-media__item">
                <Link
                  href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D"
                  className="nav__link"
                >
                  Instagram
                </Link>
              </li>
              <li className="social-media__item">
                <Link href="https://t.me/BoyarinovaAn" className="nav__link">
                  Telegram
                </Link>
              </li>
              <li className="social-media__item">
                <Link href="https://wa.me/89037522505" className="nav__link">
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__contacts">
            <ul className="contacts__list">
              <li className="contacts__item">
                <Link href="tel:+79037522505" className="nav__link">
                  8-903-752-25-05
                </Link>
              </li>
              <li className="contacts__item ">
                г. Москва, <br /> ул. Высокая 8, 1 этаж
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
