import { StartButton } from "~/components/custom/StartButton/StartButton";
import { TitlePrice } from "~/components/custom/TitlePrice/TitlePrice";
import "~/components/custom/Price/price.css";

const MakeUpPrice = () => {
  return (
    <div className="price-content">
      <div className="price-box">
        <TitlePrice title="Услуги визажиста" subtitle="Мастер Анастасия" />
        <div className="border-price">
          <h3 className="title-inner-price" style={{ borderTop: "none" }}>
            Наращивание ресниц
          </h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">Класический эффект</p>
            <span className="price-table__amount">2500</span>
            <p className="price-table__service">1,5 объема </p>
            <span className="price-table__amount">3000</span>
            <p className="price-table__service">2-ой объем</p>
            <span className="price-table__amount">3500</span>
            <p className="price-table__service">3-ий объем</p>
            <span className="price-table__amount">4500</span>
            <p className="price-table__service">Мокрый эффект</p>
            <span className="price-table__amount">от 4000</span>
          </div>
          <h3 className="title-inner-price">Брови</h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">Коррекция </p>
            <span className="price-table__amount">400</span>
            <p className="price-table__service">Окрашивание</p>
            <span className="price-table__amount">400</span>
            <p className="price-table__service">Архитектура бровей</p>
            <span className="price-table__amount">1500</span>
          </div>
          <h3 className="title-inner-price">Свадебный образ</h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">
              Свадебный образ без репетиции{" "}
            </p>
            <span className="price-table__amount">14000</span>
            <p className="price-table__service">Свадебный образ с репетицией</p>
            <span className="price-table__amount">23000</span>
            <p className="price-table__service">
              Свадебный образ + репетиция + смена образа перед рестораном +
              сопровождение весь день
            </p>
            <span className="price-table__amount">50000</span>
          </div>
          <h3 className="title-inner-price" style={{ borderTop: "none" }}>
            Дополнительные услуги
          </h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">Повторная репетиция </p>
            <span className="price-table__amount">8000</span>
            <p className="price-table__service">Сопровождение в течение дня</p>
            <span className="price-table__amount">3000 в час</span>
            <p className="price-table__service">Смена образа </p>
            <span className="price-table__amount">10000</span>
          </div>
          <h3 className="title-inner-price" style={{ borderTop: "none" }}>
            Образы для гостей невесты
          </h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">Полный образ </p>
            <span className="price-table__amount">7000</span>
            <p className="price-table__service">Макияж</p>
            <span className="price-table__amount">4000</span>
            <p className="price-table__service">Прическа</p>
            <span className="price-table__amount">4000</span>
          </div>
          <p className="additional-price-info">
            *Выезд загород оплачивается отдельно. При сборах в центре Москвы,
            оплата парковки/организация парковки при отеле
          </p>
          <h3 className="title-inner-price">На мероприятие</h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">
              Полный образ (макияж +укладка) с выездом{" "}
            </p>
            <span className="price-table__amount">8000</span>
            <p className="price-table__service">
              Полный образ (макияж +укладка) в салоне{" "}
            </p>
            <span className="price-table__amount">7000</span>
            <p className="price-table__service">Макияж с выездом</p>
            <span className="price-table__amount">5000</span>
            <p className="price-table__service">Макияж в салоне</p>
            <span className="price-table__amount">3500</span>
            <p className="price-table__service">Укладка с выездом</p>
            <span className="price-table__amount">5000</span>
            <p className="price-table__service">Укладка в салоне</p>
            <span className="price-table__amount">3500</span>
            <p className="price-table__service">Экспресс макияж</p>
            <span className="price-table__amount">2200</span>
            <p className="price-table__service">Экспресс укладка</p>
            <span className="price-table__amount">2200</span>
          </div>
          <p className="additional-price-info">
            *Выезд загород оплачивается отдельно. При сборах в центре Москвы,
            оплата парковки/организация парковки при отеле
          </p>
        </div>
      </div>
      <StartButton className="flex justify-center" />
    </div>
  );
};

export default MakeUpPrice;
