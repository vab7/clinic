import React from "react";
import Slider from "react-slick";
import { ICheckUp } from "../../models/models";
import { CardCarousel } from "./CardCarousel";

interface ICarousel {
  data: ICheckUp[];
}

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <svg
      className="absolute bottom-[-50px] cursor-pointer"
      style={{ right: "calc(50% - 90px)" }}
      onClick={onClick}
      width="34"
      height="18"
      viewBox="0 0 34 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.32817 7.67186H29.4551L24.7957 3.03512C24.2758 2.51768 24.2739 1.67678 24.7913 1.15689C25.3087 0.636925 26.1497 0.635 26.6696 1.15237L33.6093 8.05861C33.6098 8.05901 33.6101 8.05947 33.6105 8.05987C34.1291 8.57731 34.1307 9.42093 33.6106 9.94009C33.6102 9.94049 33.6098 9.94095 33.6094 9.94135L26.6697 16.8476C26.1499 17.3649 25.3089 17.3631 24.7914 16.8431C24.274 16.3232 24.276 15.4823 24.7959 14.9648L29.4551 10.3281H1.32817C0.594646 10.3281 4.57764e-05 9.7335 4.57764e-05 8.99998C4.57764e-05 8.26646 0.594646 7.67186 1.32817 7.67186Z"
        fill="#E1E1E1"
      />
    </svg>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <svg
      className="absolute bottom-[-50px] cursor-pointer"
      style={{ left: "calc(50% - 90px)" }}
      onClick={onClick}
      width="34"
      height="18"
      viewBox="0 0 34 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.6718 7.67186H4.54493L9.20426 3.03512C9.72416 2.51768 9.72615 1.67678 9.20871 1.15689C8.69127 0.636925 7.8503 0.635 7.33041 1.15237L0.390691 8.05861C0.390226 8.05901 0.389894 8.05947 0.389496 8.05987C-0.129071 8.57731 -0.130731 9.42093 0.389363 9.94009C0.389828 9.94049 0.39016 9.94095 0.390558 9.94135L7.33028 16.8476C7.85011 17.3649 8.69107 17.3631 9.20858 16.8431C9.72602 16.3232 9.72402 15.4823 9.20413 14.9648L4.54493 10.3281H32.6718C33.4054 10.3281 34 9.7335 34 8.99998C34 8.26646 33.4054 7.67186 32.6718 7.67186Z"
        fill="#E1E1E1"
      />
    </svg>
  );
};

export const Carousel: React.FC<ICarousel> = ({ data }) => {
  const [activeSlide, setSlideNumber] = React.useState(1);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 110000,
    afterChange: (current: number) => setSlideNumber(current + 1),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex relative flex-col">
      <Slider {...settings}>
        {data.map((item) => (
          <CardCarousel key={item.id} {...item} />
        ))}
      </Slider>
      <div className="flex items-center justify-center h-[80px]">
        <span className="text-lg">
          <span>{activeSlide}</span>
          <span className="text-gray-400">/{data.length}</span>
        </span>
      </div>
    </div>
  );
};
