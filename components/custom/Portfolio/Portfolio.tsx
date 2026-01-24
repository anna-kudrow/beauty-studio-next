import Link from "next/link";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__inner">
        <h2 id="gallery" className="about__title title">
          Галерея работ
        </h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <Link href="/gallery/weddings">
              <h3 className="portfolio__title">Свадьбы</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio-cases/bride1-dancing.jpg"
                  alt="Фото обложки блока `Свадьбы`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link href="/gallery/events">
              <h3 className="portfolio__title">На мероприятия</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio-cases/event-cover.jpg"
                  alt="Фото обложки блока `мероприятия`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link href="/gallery/hairstyling">
              <h3 className="portfolio__title">Парикмахерские услуги</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio-cases/hairstyle-cover.jpg"
                  alt="Фото обложки блока `Парикмахерские услуги`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link href="/gallery/photosessions">
              <h3 className="portfolio__title">Фотосессии под ключ</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio-cases/photosessions-cover.jpg"
                  alt="Фото обложки блока `Фотосессии под ключ`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link href="/gallery/backstage">
              <h3 className="portfolio__title">Backstage</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio-cases/backstage-cover2.jpg"
                  alt="Фото обложки блока `Backstage`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link href="/gallery/theater">
              <h3 className="portfolio__title">Грим и театральные образы</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio-cases/theater-cover.jpg"
                  alt="Фото обложки блока `Грим и театральные образы`"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
