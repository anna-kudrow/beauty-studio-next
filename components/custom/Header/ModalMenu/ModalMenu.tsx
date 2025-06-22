"use client";
import "./ModalMenu.css";
import { useRef } from "react";
import { ANCORS_DATA } from "../../../../lib/const";
import { MenuItem } from "./MenuItem/MenuItem";

export const ModalMenu = () => {
  const menuRef = useRef<HTMLUListElement>(null);

  return (
    <nav ref={menuRef}>
      <ul className="modal-menu__list">
        {ANCORS_DATA.map((ancor) => (
          <MenuItem key={ancor.path} ancorData={ancor} />
        ))}
      </ul>
    </nav>
  );
};
