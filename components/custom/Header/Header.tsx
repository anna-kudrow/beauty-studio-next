import "./Header.css";
import DesktopNav from "./DesktopNav.tsx/DesktopNav";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import Link from "next/link";
import { HeaderToggleMenu } from "../HeaderToggleMenu/HeaderToggleMenu";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <HeaderLogo />
        <DesktopNav />
        <div className="header__contacts">
          <Link
            href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D"
            className="instagram-link"
          />
          <Link href="tel:+79037522505" className="phone-num">
            8-903-752-25-05
          </Link>
        </div>
        <HeaderToggleMenu />
      </div>
    </header>
  );
};
