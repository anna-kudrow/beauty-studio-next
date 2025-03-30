import Link from "next/link";
import "./StartButton.css";

type props = {
  addClass?: string;
};

export const StartButton = ({ addClass }: props) => {
  return (
    <Link href="/#form">
      <button className="start-button" type="button">
        Начать преображение
      </button>
    </Link>
  );
};
