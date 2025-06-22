import "./Header.css";
import Link from "next/link";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { HeaderToggleMenu } from "../HeaderToggleMenu/HeaderToggleMenu";
import DesktopNav from "./DesktopNav.tsx/DesktopNav";

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
