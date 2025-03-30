"use client";
import "./HeaderToggleMenu.css";
import { useState } from "react";
import { ModalMenu } from "../Header/ModalMenu/ModalMenu";

export const HeaderToggleMenu = () => {
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const handleNavToggleClick = () => {
    setModalMenuOpen(!modalMenuOpen);
  };

  return (
    <div>
      <div className="header__menu-toggle" onKeyDown={handleNavToggleClick}>
        {!modalMenuOpen ? (
          <button
            type="button"
            style={{ color: "#363636", width: "20px", height: "20px" }}
          />
        ) : (
          <button
            type="button"
            style={{ color: "#363636", width: "20px", height: "20px" }}
          />
        )}
      </div>
      <ModalMenu
        modalMenuOpen={modalMenuOpen}
        setModalMenuOpen={setModalMenuOpen}
      />
    </div>
  );
};
