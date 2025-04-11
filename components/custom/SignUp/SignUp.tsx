import { ClientForm } from "./ClientForm/ClientForm";
import "./sign-up.css";

export const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="sign-up__inner">
        <h2 id="sign-form" className="sign-up__title title">
          Заполни анкету !
        </h2>
        <p className="sign-up__text">Начни преображение уже сегодня</p>
        <ClientForm />
      </div>
    </section>
  );
};
