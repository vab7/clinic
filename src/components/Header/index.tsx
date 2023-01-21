import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { BurgerMenu } from "./BurgerMenu";
import s from "./Header.module.scss";
import { Logo, MapIcon, WhatsAppIcon } from "../Icons";
import { Button } from "../Button";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import { Form } from "../Form";
import { useAppSelector } from "../../hooks/redux";

export const Header = () => {
  const { closeMenu, openForm } = useActions();
  const isFormShow = useAppSelector((state) => state.clinic.isFormShow);

  const onClickMakeAppointment = () => {
    openForm();
  };

  return (
    <div id={s.header_container} className="flex">
      <div className={`${isFormShow ? "block" : "hidden"}`}>
        <Form />
      </div>
      <header className="header fixed top-0 w-full bg-white z-10">
        <Container>
          <Row>
            <div className="flex justify-between h-[60px] px-3">
              <div className="flex items-center gap-[3rem]">
                <div id={`${s.burger_menu}`} className="">
                  <BurgerMenu />
                </div>
                <Link to="/" onClick={() => closeMenu()}>
                  <div id={`${s.logo}`}>
                    <Logo />
                  </div>
                </Link>
                <div id={`${s.address}`}>
                  <div className="flex items-start gap-2">
                    <MapIcon />
                    <div className="flex flex-col items-center">
                      <p className="font-medium text-sm mb-[-5px]">
                        Ростов-на-Дону
                      </p>
                      <p className="text-gray-400 text-sm m-0">
                        ул. Ленина, 2Б
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="appointment"
                className="flex items-center gap-[2rem] font-medium"
              >
                <div className="flex items-center gap-2">
                  <span id={`${s.icon_phone}`}>
                    <WhatsAppIcon />
                  </span>
                  <div className="flex flex-col">
                    <p id={`${s.number}`} className="mb-[-5px]">
                      +7(863) 000 00 00
                    </p>
                    <p
                      id={`${s.city}`}
                      className="flex justify-end text-sm m-0"
                    >
                      Ростов-на-Дону
                    </p>
                  </div>
                </div>
                <div id={`${s.button_appointment}`}>
                  <Button
                    text="Записаться на прием"
                    color="color-white"
                    colorHover="color-1"
                    border="border-1"
                    borderHover="border-1"
                    bg="bg-color-1"
                    bgHover="bg-transparent"
                    onClick={() => onClickMakeAppointment()}
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Menu />
      </header>
    </div>
  );
};
