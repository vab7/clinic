import s from "./HomePage.module.scss";
import img_bg from "../../assets/img/clinic_home_bg.jpg";
import { Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetCheckUpsQuery } from "../../store/clinic/clinic.api";
import { Carousel } from "../../components/Carousel";

export const HomePage = () => {
  const { isLoading: isCheckUpLoading, data: checkUpData } =
    useGetCheckUpsQuery(null);

  return (
    <>
      <div id={s.feature}>
        <img src={img_bg} id={s.bg_home_img} alt="Клиника Logo" />
        <div className="h-full flex items-center">
          <Container>
            <Row>
              <div id={s.feature_section} className="h-full">
                <div
                  id={s.feature_container_text}
                  className="flex flex-col gap-2"
                >
                  <h1 className={`font-bold color-text-1`}>
                    Многопрофильная клиника для детей и взрослых
                  </h1>
                  <p className="color-text-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <div id="check_up_section" className="py-20">
        <Container>
          <Row>
            {isCheckUpLoading && (
              <span className="text-center">Loading...</span>
            )}
            {checkUpData && <Carousel data={checkUpData} />}
          </Row>
        </Container>
      </div>
    </>
  );
};
