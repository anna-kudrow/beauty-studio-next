import { StartButton } from "../StartButton/StartButton";
import "./Promo.css";

export const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__inner">
        <div className="promo__grid">
          <div className="promo__title-box">
            <div className="promo__title-wrapper">
              <span className="promo__title--rouge-color">макияж</span>
              <span className="promo__title--brown-color up">прически</span>
              <span className="promo__title--brown-color bottom">стиль</span>
            </div>
            <div className="promo__title-name__wrapper">
              <span className="promo__title-name slide-in-blurred-bottom">
                Boyarinova_studio
              </span>
            </div>
          </div>
          <div className="promo__photo1-wrapper">
            <div className="promo__photo1">
              <img src="./images/cover1x3.jpg" alt="Фото модели ч/б" />
            </div>
          </div>
          <div className="promo__photo2-wrapper">
            <div className="promo__photo2">
              <img src="./images/cover2x3.jpg" alt="Фото модели для обложки" />
            </div>
          </div>
        </div>
        <StartButton className="xl:absolute xl:top-[600px] xl:left-[22%]" />
      </div>
    </section>
  );
};
