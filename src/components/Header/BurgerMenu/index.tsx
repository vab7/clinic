import { useActions } from "../../../hooks/actions";
import { useAppSelector } from "../../../hooks/redux";
import s from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const { toggleMenu } = useActions();
  const isMenuSide = useAppSelector((state) => state.clinic.isMenuShow);

  return (
    <div
      id={`${s.burger_menu}`}
      onClick={() => toggleMenu()}
      className="relative w-[30px] h-[23px] flex items-center"
    >
      <div
        id={`${s.line_1}`}
        className={`absolute w-full bg-color-1 h-[3px] transition-all ${
          isMenuSide ? `rotate-45 top-[10px]` : "top-0"
        }`}
      ></div>
      <div
        id={`${s.line_2}`}
        className={`absolute w-full bg-color-1 h-[3px] transition-all ${
          isMenuSide ? `opacity-0` : ""
        }`}
      ></div>
      <div
        id={`${s.line_3}`}
        className={`absolute w-full bg-color-1 h-[3px] transition-all ${
          isMenuSide ? `rotate-[-45deg] bottom-[10px]` : "bottom-0"
        }`}
      ></div>
    </div>
  );
};
