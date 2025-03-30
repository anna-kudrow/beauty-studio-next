import { HashLink } from "react-router-hash-link";
import "./StartButton.css";

type props = {
  addClass?: string;
};

export const StartButton = ({ addClass }: props) => {
  return (
    <HashLink smooth to="/#form">
      <button className={`start-button ${addClass}`} type="button">
        Начать преображение
      </button>
    </HashLink>
  );
};
