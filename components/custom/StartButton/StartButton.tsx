import Link from "next/link";
import "./StartButton.css";

export const StartButton = ({
  className,
}: { className?: string | undefined }) => {
  return (
    <Link className={className} href="/#sign-form">
      <button className="start-button" type="button">
        Начать преображение
      </button>
    </Link>
  );
};
