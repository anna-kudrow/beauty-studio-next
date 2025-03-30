import Link from "next/link";
import "./price.css";
import { ButtonPrice } from "../ButtonPrice/ButtonPrice";

export const Price = () => {
  return (
    <section className="price" id="services">
      <div className="price__inner">
        <h2 className="price__title title">Прайс</h2>
        <ul className="price__cards">
          <li className="price__card">
            <p className="card__title">
              <span className="title__service">Парикмахерские услуги</span>
              <span className="title__master">Мастер Светлана</span>
            </p>
            <ul className="services__list">
              <li className="services__item">Любые виды окрашивания</li>
              <li className="services__item">Стрижки</li>
              <li className="services__item">Мужские стрижки</li>
              <li className="services__item">Глубокое восстановление волос</li>
            </ul>
            <Link href="/hair-price">
              <ButtonPrice />
            </Link>
          </li>
          <li className="price__card">
            <p className="card__title">
              <span className="title__service">Услуги визажиста</span>
              <span className="title__master">Мастер Анастасия</span>
            </p>
            <ul className="services__list">
              <li className="services__item">Наращивание ресниц</li>
              <li className="services__item">Брови</li>
              <li className="services__item">Свадебный образ</li>
              <li className="services__item">На мероприятие</li>
            </ul>
            <Link href="/makeup-price">
              <ButtonPrice />
            </Link>
          </li>
          <li className="price__card">
            <p className="card__title">
              <span className="title__service">Фотосессии под ключ</span>
              <span className="title__master">Мастер Анастасия</span>
            </p>
            <ul className="services__list">
              <li className="services__item">Макияж</li>
              <li className="services__item">Фотограф</li>
              <li className="services__item">Стилист по одежде</li>
            </ul>
            <Link href="/photoshoot-price">
              <ButtonPrice />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
