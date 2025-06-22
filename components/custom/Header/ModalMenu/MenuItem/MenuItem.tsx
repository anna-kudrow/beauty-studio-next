import Link from "next/link";
import "../ModalMenu.css";

type MenuItemProps = {
  ancorData: {
    path: string;
    title: string;
  };
  onClick: () => void;
  // setModalMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuItem = ({ ancorData, onClick }: MenuItemProps) => {
  return (
    <li className="modal-menu__item" onKeyDown={onClick}>
      <Link
        onClick={onClick}
        href={ancorData.path}
        className="modal-menu__link"
      >
        {ancorData.title}
      </Link>
    </li>
  );
};
