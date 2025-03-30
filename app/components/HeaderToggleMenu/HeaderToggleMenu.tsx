import "./HeaderToggleMenu.css";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ModalMenu } from "../../components/Header/ModalMenu/ModalMenu";

export const HeaderToggleMenu = () => {
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const handleNavToggleClick = () => {
    setModalMenuOpen(!modalMenuOpen);
  };

  return (
    <div>
      <button className="header__menu-toggle" onClick={handleNavToggleClick}>
        {!modalMenuOpen ? (
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#363636", width: "20px", height: "20px" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faX}
            style={{ color: "#363636", width: "20px", height: "20px" }}
          />
        )}
      </button>
      <ModalMenu
        modalMenuOpen={modalMenuOpen}
        setModalMenuOpen={setModalMenuOpen}
      />
    </div>
  );
};
