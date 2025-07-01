"use client";
import "./Header.css";
import Link from "next/link";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import DesktopNav from "./DesktopNav.tsx/DesktopNav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { ANCORS_DATA } from "~/lib/const";
import { useRef, useState } from "react";

export const Header = () => {
  const [activeAncorPath, setActiveAncorPath] = useState<string>("");
  const menuRef = useRef<HTMLUListElement>(null);

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
        <Sheet
          onOpenChange={(open) => {
            setTimeout(() => {
              if (!open && activeAncorPath !== "") {
                window.location.hash = activeAncorPath;
              }
            }, 400);
          }}
        >
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetDescription hidden> Mobile menu list</SheetDescription>
            <SheetTitle className="hidden">Открыть меню навигации</SheetTitle>
            <nav ref={menuRef}>
              <ul className="modal-menu__list">
                {ANCORS_DATA.map((ancor) => (
                  <SheetClose key={ancor.path} asChild>
                    <li
                      className="modal-menu__link"
                      onKeyUp={() => {
                        setActiveAncorPath(ancor.path);
                      }}
                      onClick={() => {
                        setActiveAncorPath(ancor.path);
                      }}
                    >
                      {ancor.title}
                    </li>
                  </SheetClose>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
