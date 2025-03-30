import Link from "next/link";
import "../ModalMenu.css";

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
      <Link
        onClick={() => setModalMenuOpen(false)}
        href={ancorData.path}
        className="modal-menu__link"
      >
        {ancorData.title}
      </Link>
    </li>
  );
};
