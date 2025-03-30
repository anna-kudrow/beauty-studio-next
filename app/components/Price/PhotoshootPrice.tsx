import { StartButton } from "../../../ui/StartButton/StartButton";
import { TitlePrice } from "../../../ui/TitlePrice/TitlePrice";
import "./price.css";

export const PhotoshootPrice = () => {
  return (
    <>
      <div className="price-box">
        <TitlePrice title="Фотосессии под ключ" subtitle="Мастер Анастасия" />
        <div className="border-price">
          <div className="price-table price-table__single">
            <p className="price-table__service">Макияж + фотограф (Street)</p>
            <span className="price-table__amount">от 7000</span>
            <p className="price-table__service">
              Полный образ + фотограф (Street)
            </p>
            <span className="price-table__amount">от 12000</span>
            <p className="price-table__service">
              Полный образ + фотограф +студия{" "}
            </p>
            <span className="price-table__amount">от 15000</span>
            <p className="price-table__service">
              Полный образ + фотограф +студия + стилист по одежде{" "}
            </p>
            <span className="price-table__amount">от 24000</span>
            <p className="price-table__service">Фотодни</p>
            <span className="price-table__amount">от 9000</span>
          </div>
        </div>
      </div>
      <StartButton addClass="flex mx-auto " />
    </>
  );
};
