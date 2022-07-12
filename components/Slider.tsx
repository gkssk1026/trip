import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider2 from "react-slick";
import sliderTypeProps from "../ts/interface/slider/slider";

interface sliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sliderProps: any;
  sliderData: sliderTypeProps[];
}

const Slider: React.FC<sliderProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div>
      <h2></h2>
      <Slider2 {...settings}>
        {props.sliderData.map((item) => (
          <li key={item.id}>
            {item.title}
            {item.image}
          </li>
        ))}
      </Slider2>
    </div>
  );
};

export default Slider;
