import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { Button } from "../../Button";
import s from "./Menu.module.scss";
import { MenuItem } from "./MenuItem";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { useActions } from "../../../hooks/actions";

export const Menu = () => {
  const { isMenuShow, menuItems } = useAppSelector((state) => state.clinic);
  const { openForm } = useActions();

  React.useEffect(() => {
    const app = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    if (isMenuShow) {
      app.style.overflow = "hidden";
    } else {
      app.style.overflow = "auto";
    }
  }, [isMenuShow]);

  return (
    <div
      id={`${s.menu}`}
      className={`${
        isMenuShow ? `!translate-x-0` : ``
      } transition-all bg-color-1-dark`}
    >
      <Container>
        <Row>
          <ul id={`${s.menu_container}`} className="flex">
            {menuItems?.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </ul>
          <div id={`${s.button_appointment}`} className="px-4 w-auto">
            <Button
              onClick={() => openForm()}
              text="Записаться на прием"
              color="color-1"
              border="border-2"
              borderHover="border-2"
              colorHover="text-white"
              bg="bg-white"
              bgHover="bg-transparent"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};
