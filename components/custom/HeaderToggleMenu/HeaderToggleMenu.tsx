"use client";
import "./HeaderToggleMenu.css";
import { useState } from "react";
import { ModalMenu } from "../Header/ModalMenu/ModalMenu";
import { Menu, X } from "lucide-react";

export const HeaderToggleMenu = () => {
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const handleNavToggleClick = () => {
    setModalMenuOpen(!modalMenuOpen);
  };

  return (
    <div className="header__menu-toggle-box">
      <div className="header__menu-toggle" onMouseDown={handleNavToggleClick}>
        {!modalMenuOpen ? (
          <button
            type="button"
            style={{ color: "#363636", width: "20px", height: "20px" }}
          >
            {" "}
            <Menu />
          </button>
        ) : (
          <button
            type="button"
            style={{ color: "#363636", width: "20px", height: "20px" }}
          >
            {" "}
            <X />
          </button>
        )}
      </div>
      <ModalMenu
        modalMenuOpen={modalMenuOpen}
        setModalMenuOpen={setModalMenuOpen}
      />
    </div>
  );
};
