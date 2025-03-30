import "./About.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <h2 className="about__title title">О НАС</h2>
        <div className="about__box">
          <div className="about__anastasiya">
            <div className="about__info-content">
              <h3 className="about__small-title">Анастасия</h3>
              <p className="about__text">
                Я профессиональный визажист, гример, свадебный стилист. За свою
                карьеру учавствовала самых разнообразных проектах, преображая
                людей. А если ты мечтаешь сама научиться краситься и создавать
                красивые образы, то записывайся на мой мастер класс «макияж для
                себя» и я помогу осуществить твою мечту.
              </p>
            </div>
            <div className="photo-anastasiya-box">
              <img src="./images/anastasiya.jpg" alt="фото Анастасии" />
            </div>
          </div>
          <div className="about__svetlana">
            <div className="about__info-content">
              <h3 className="about__small-title">Светлана</h3>
              <p className="about__text">
                Я стилист-модельер, колорист и специалист по уходовым процедурам
                люкс-класса. В сфере парикмахерского искусства уже более 25 лет
                и считаю это делом своей жизни. Работала в топовых салонах
                красоты Москвы, ну а сейчас являюсь организатором и
                руководителем студии "Boyarinova studio". Жду вас на бесплатную
                консультацию.
              </p>
            </div>
            <div className="photo-svetlana-box">
              <img
                src="./images/svetlana.jpg
                    "
                alt="фото Светланы"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
