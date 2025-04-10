import { StartButton } from "~/components/custom/StartButton/StartButton";
import { TitlePrice } from "~/components/custom/TitlePrice/TitlePrice";
import "~/components/custom/Price/price.css";

const HairServicePrice = () => {
  return (
    <div className="price-content">
      <div className="price-box">
        <TitlePrice title="Парикмахерские услуги" subtitle="Мастер Светлана" />
        <div className="border-price">
          <div className="price-table">
            <span className="price-table__length length1">длина 1 </span>
            <span className="price-table__length">длина 2 </span>
            <span className="price-table__length">длина 3 </span>
            <span className="price-table__length">длина 4 </span>
            <p className="price-table__service">Мытье, стрижка, укладка</p>
            <span className="price-table__amount">2500</span>
            <span className="price-table__amount">3000</span>
            <span className="price-table__amount">3500</span>
            <span className="price-table__amount">4500</span>
            <p className="price-table__service">Мытье, стрижка , сушка</p>
            <span className="price-table__amount">2000</span>
            <span className="price-table__amount">2500</span>
            <span className="price-table__amount">2800</span>
            <span className="price-table__amount">4000</span>
            <p className="price-table__service">Мытье, укладка</p>
            <span className="price-table__amount">1500</span>
            <span className="price-table__amount">1500</span>
            <span className="price-table__amount">1800</span>
            <span className="price-table__amount">2500</span>
            <p className="price-table__service">Мытье, сушка</p>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">1000</span>
            <p className="price-table__service">
              Укладка на бигуди,
              <br /> расческу-бигуди
            </p>
            <span className="price-table__amount">2500</span>
            <span className="price-table__amount">2500</span>
            <span className="price-table__amount">2500</span>
            <span className="price-table__amount">2500</span>
            <p className="price-table__service">Окрашивание</p>
            <span className="price-table__amount">4500</span>
            <span className="price-table__amount">5000</span>
            <span className="price-table__amount">6000</span>
            <span className="price-table__amount">
              {" "}
              <span className="price-from">от </span>6000
            </span>
            <p className="price-table__service">Окрашивание корней</p>
            <span className="price-table__amount">3500</span>
            <span className="price-table__amount">4000</span>
            <span className="price-table__amount">
              <span className="price-from">от </span>4000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от </span>4000
            </span>
            <p className="price-table__service">
              Экспресс тонирование волос (сложные + 20 %)
            </p>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">900</span>
            <span className="price-table__amount">1300</span>
            <span className="price-table__amount">1500</span>
            <p className="price-table__service">Прикорневое блондирование</p>
            <span className="price-table__amount">3000</span>
            <span className="price-table__amount">3500</span>
            <span className="price-table__amount">4000</span>
            <span className="price-table__amount">
              <span className="price-from">от </span>4000
            </span>
            <p className="price-table__service">Блондирующая смывка</p>
            <span className="price-table__amount">550</span>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">900</span>
            <span className="price-table__amount">1100</span>
            <p className="price-table__service">Мелирование (сложные + 20 %)</p>
            <span className="price-table__amount">4000</span>
            <span className="price-table__amount">5300</span>
            <span className="price-table__amount">6000</span>
            <span className="price-table__amount">6500</span>
            <p className="price-table__service">
              Частичное мелирование (до 8 прядей)
            </p>
            <span className="price-table__amount">1500</span>
            <span className="price-table__amount">1800</span>
            <span className="price-table__amount">1900</span>
            <span className="price-table__amount">2000</span>
            <p className="price-table__service">
              Прикорневое мелирование (до 1 см)
            </p>
            <span className="price-table__amount">4000</span>
            <span className="price-table__amount">4800</span>
            <span className="price-table__amount">5000</span>
            <span className="price-table__amount">5500</span>
            <p className="price-table__service">
              Колорирование (сложные +20 %)
            </p>
            <span className="price-table__amount">4900</span>
            <span className="price-table__amount">6500</span>
            <span className="price-table__amount">8000</span>
            <span className="price-table__amount">
              <span className="price-from">от </span>8000
            </span>
            <p className="price-table__service">
              Окрашивание техниками: шатуш, омбре, балаяж{" "}
            </p>
            <span className="price-table__amount">
              <span className="price-from">от </span>5000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от </span>6000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от </span>8000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от</span>10000
            </span>
            <p className="price-table__service">
              Окрашивание в технике “Airtouch”{" "}
            </p>
            <span className="price-table__amount"> </span>
            <span className="price-table__amount">
              <span className="price-from">от</span>12000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от</span>15000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от</span>20000
            </span>
            <p className="price-table__service">Химия /БИО химия</p>
            <span className="price-table__amount">5000</span>
            <span className="price-table__amount">5500</span>
            <span className="price-table__amount">
              <span className="price-from">от </span>6000
            </span>
            <span className="price-table__amount">
              <span className="price-from">от </span>6000
            </span>
            <p className="price-table__service">Детская стрижка </p>
            <span className="price-table__amount">1000</span>
            <span className="price-table__amount">1500</span>
            <span
              className="price-table__amount"
              style={{ gridColumn: 3 / 4 }}
            />
          </div>
          <h3 className="title-inner-price">Базовый уход</h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">
              Шампунь, восстанавливающая маска
            </p>
            <span className="price-table__amount">450</span>
            <p className="price-table__service">Лифтинг для волос</p>
            <span className="price-table__amount">350</span>
          </div>
          <h3 className="title-inner-price">Мужской раздел </h3>
          <div className="price-table price-table__single">
            <p className="price-table__service">Мужская стрижка (комплекс)</p>
            <span className="price-table__amount">500 - 2000</span>
            <p className="price-table__service">
              Стрижка бороды + усы под машинку
            </p>
            <span className="price-table__amount">800</span>
            <p className="price-table__service">Стрижка усов</p>
            <span className="price-table__amount">500</span>
            <p className="price-table__service">Контуринг бороды</p>
            <span className="price-table__amount">1000</span>
          </div>
        </div>
        <TitlePrice
          title="Глубокое восстановление волос "
          subtitle="Мастер Светлана"
        />
        <div className="border-price">
          <h3 className="title-inner-price" style={{ borderTop: "none" }}>
            Холодный ботокс для волос KV-1 (Испания)
          </h3>
          <div className="price-table">
            <span className="price-table__length length1">длина 1 </span>
            <span className="price-table__length">длина 2 </span>
            <span className="price-table__length">длина 3 </span>
            <span className="price-table__length">длина 4 </span>
            <p className="price-table__service">100 % восстановление</p>
            <span className="price-table__amount">2000</span>
            <span className="price-table__amount">3000</span>
            <span className="price-table__amount">4500</span>
            <span className="price-table__amount">6900</span>
            <p className="price-table__service">Коктейль</p>
            <span className="price-table__amount">-</span>
            <span className="price-table__amount">-</span>
            <span className="price-table__amount">-</span>
            <span className="price-table__amount">-</span>
            <p className="price-table__service">До окрашивания</p>
            <span className="price-table__amount">3800</span>
            <span className="price-table__amount">4900</span>
            <span className="price-table__amount">6900</span>
            <span className="price-table__amount">9900</span>
            <p className="price-table__service">Во время окрашивания</p>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">800</span>
            <span className="price-table__amount">1000</span>
            <p className="price-table__service">После окрашивания</p>
            <span className="price-table__amount">2500</span>
            <span className="price-table__amount">2500</span>
          </div>
          <h3 className="title-inner-price">SPA для волос KV-1 (Испания)</h3>
          <h4 className="subtitle-inner-price">
            Профессиональный комплексный уход
          </h4>
          <div className="price-table price-table__single">
            <p className="price-table__service">Комплекс “7 в 1”</p>
            <span className="price-table__amount">1200</span>
          </div>
          <h4 className="subtitle-inner-price">
            Капиллярный пилинг+массаж головы
          </h4>
          <div className="price-table price-table__single">
            <p className="price-table__service">Стимулирующий</p>
            <span className="price-table__amount">600</span>
            <p className="price-table__service">Улучшающий рост волос</p>
            <span className="price-table__amount">600</span>
            <p className="price-table__service">Очищающий</p>
            <span className="price-table__amount">600</span>
            <p className="price-table__service">Антивозрастной</p>
            <span className="price-table__amount">600</span>
            <p className="price-table__service">Ухаживающий</p>
            <span className="price-table__amount">600</span>
          </div>
          <h3 className="title-inner-price">
            Восстановление волос luxury (Испания)
          </h3>
          <div className="price-table">
            <p className="price-table__service">
              Реконструкция волос “RE CO” (масло+сыворотка+маска)
            </p>
            <span className="price-table__amount">900</span>
            <span className="price-table__amount">1200</span>
            <span className="price-table__amount">1450</span>
            <span className="price-table__amount">1600</span>
          </div>
          <h3 className="title-inner-price">“Nirvel” (Италия)</h3>
          <div className="price-table">
            <p className="price-table__service">
              Гидратация волос (восстановление, увлажнение)
            </p>
            <span className="price-table__amount">600</span>
            <span className="price-table__amount">700</span>
            <span className="price-table__amount">900</span>
            <span className="price-table__amount">1300</span>
          </div>
          <h3 className="title-inner-price">Proteins Repair (ампула)</h3>
          <div className="price-table price-table__single ">
            <p className="price-table__service ">Экспресс-восстановление</p>
            <span className="price-table__amount">450</span>
            <p className="price-table__service ">Защита во время окрашивания</p>
            <span className="price-table__amount">5 ml - 250</span>
          </div>
        </div>
      </div>
      <StartButton className="flex justify-center" />
    </div>
  );
};

export default HairServicePrice;
