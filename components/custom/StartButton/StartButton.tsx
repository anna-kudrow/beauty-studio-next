import Link from "next/link";
import "./StartButton.css";
import { cn } from "~/lib/utils";

export const StartButton = ({
  className,
}: { className?: string | undefined }) => {
  return (
    <Link className={className} href="/#form">
      <button className="start-button" type="button">
        Начать преображение
      </button>
    </Link>
  );
};
