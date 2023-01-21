import { useActions } from "../../../../hooks/actions";
import s from "./MenuItem.module.scss";
import { Link } from "react-router-dom";

interface MenuItem {
  id: number;
  name: string;
  url: string;
}

export const MenuItem = ({ name, url }: MenuItem) => {
  const { toggleMenu } = useActions();

  return (
    <li id={`${s.menu_item}`} className="relative w-max text-white">
      <Link
        to={url}
        onClick={() => toggleMenu()}
        id={`${s.menu_link}`}
        className={`${s.menu_item} text-white`}
      >
        {name}
      </Link>
    </li>
  );
};
