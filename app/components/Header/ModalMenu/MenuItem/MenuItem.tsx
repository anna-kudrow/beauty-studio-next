import "../ModalMenu.css";
import { HashLink } from "react-router-hash-link";

type MenuItemProps = {
  ancorData: {
    path: string;
    title: string;
  };
  setModalMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuItem = ({ ancorData, setModalMenuOpen }: MenuItemProps) => {
  return (
    <li className="modal-menu__item">
      <HashLink
        onClick={() => setModalMenuOpen(false)}
        smooth
        to={ancorData.path}
        className="modal-menu__link"
      >
        {ancorData.title}
      </HashLink>
    </li>
  );
};
