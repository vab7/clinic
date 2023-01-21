import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../hooks/redux";
import { MenuItem } from "../Header/Menu/MenuItem";
import { Logo } from "../Icons";
import instagram from "../../assets/img/instagram.png";
import telegram from "../../assets/img/telegram.png";
import whatsapp from "../../assets/img/whatsapp.png";
import s from "./Footer.module.scss";

export const Footer = () => {
  const menuItems = useAppSelector((state) => state.clinic.menuItems);

  return (
    <div className="color-dark-2">
      <Container>
        <Row>
          <div className="flex items-center justify-between py-5">
            <div className="w-[50px]">
              <Logo color="white" />
            </div>
            <ul id={s.footer_menu} className="flex gap-5 m-0">
              {menuItems.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </ul>
            <div className="flex gap-3">
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="" />
              </a>
              <a href="#">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
