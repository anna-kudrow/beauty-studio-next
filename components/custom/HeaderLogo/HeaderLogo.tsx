import Link from "next/link";
import "./HeaderLogo.css";
import { cn } from "~/lib/utils";

export const HeaderLogo = ({
  className,
}: { className?: string | undefined }) => {
  return (
    <div className={cn("header__logo", className)}>
      <Link href="/" className="logo__link">
        <span className="logo-link__upper">Boyarinova_studio</span>
        <span className="logo-link__bottom">Анастасия & Светлана</span>
      </Link>
    </div>
  );
};
