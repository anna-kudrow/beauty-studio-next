// import { TOKEN } from "./token";

export const CATEGORY = {
  weddings: "Свадьбы",
  backstage: "Backstage",
  events: "На мероприятия",
  hairstyle: "Парикмахерские услуги",
  photosessions: "Фотосессии под ключ",
};

export const ANCORS_DATA = [
  {
    path: "/",
    title: "Главная",
  },
  {
    path: "about",
    title: "О нас",
  },
  {
    path: "gallery",
    title: "Галерея",
  },
  {
    path: "advantages",
    title: "Преимущества",
  },
  {
    path: "achievments",
    title: "Достижения",
  },
  {
    path: "services",
    title: "Услуги",
  },
];


export const TOKEN = "7653182299:AAG1oW1H3CeFZ2FLeKnuKJFIXVHpqDxsoHI";
export const CHAT_ID = "-1002417558436";
export const ERROR_MESSAGE = "Произошла ошибка, попробуйте снова...";
export const SUCCESS_MESSAGE = "Спасибо, мы свяжемся с Вами в ближайшее время!";
export const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
