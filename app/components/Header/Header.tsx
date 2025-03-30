import "./Header.css";
import DesktopNav from "./DesktopNav.tsx/DesktopNav";

import { Link } from "react-router-dom";
import { HeaderLogo } from "../../ui/HeaderLogo/HeaderLogo";
import { HeaderToggleMenu } from "../../ui/HeaderToggleMenu/HeaderToggleMenu";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <HeaderLogo />
        <div className="header__right-box">
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
      </div>
    </header>
  );
};
