"use client";
import "./ModalMenu.css";
import { useEffect, useRef } from "react";
import { ANCORS_DATA } from "../../../../lib/const";
import { MenuItem } from "./MenuItem/MenuItem";

type Props = {
  modalMenuOpen: boolean;
  setModalMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalMenu = ({ modalMenuOpen, setModalMenuOpen }: Props) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (modalMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalMenuOpen]);

  // const handleClickOutside = (e: MouseEvent ) => {
  //   if (menuRef.current
  //     && e.target
  //     // && e.target.classList.contains('header__menu-toggle')
  //     && !menuRef.current.contains(e.target as Node)
  //   )
  //     {
  //     setModalMenuOpen(false)
  //   }
  // }

  // useEffect(()=> {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside)
  // }, [])

  const menuEl = (
    <nav ref={menuRef} className="modal-menu slide-in-right">
      <ul className="modal-menu__list">
        {ANCORS_DATA.map((ancor) => (
          <MenuItem
            key={ancor.path}
            ancorData={ancor}
            setModalMenuOpen={setModalMenuOpen}
          />
        ))}
      </ul>
    </nav>
  );

  return modalMenuOpen ? menuEl : null;
};
