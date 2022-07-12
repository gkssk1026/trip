import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/Slider";
import Cardmedia from "../components/Cardmedia";
import sliderTypeProps from "../ts/interface/slider/slider";

export default function MediaCard() {
  const sliderData: sliderTypeProps[] = [
    { id: 1, title: "제주항공권", image: "aa" },
    { id: 2, title: "신라호텔", image: "a" },
    { id: 3, title: "돌아온 동남아 특가", image: "bb" },
    { id: 4, title: "초특가 물놀이", image: "b" },
    { id: 5, title: "5성급 수영장", image: "c" },
    { id: 6, title: "여행자보험", image: "cc" },
  ];
  return (
    <>
      <div>
        <h1>여행이 돌아왔어요.</h1>
      </div>

      <Cardmedia></Cardmedia>
      <Slider sliderData={sliderData} sliderProps={undefined}></Slider>
    </>
  );
}
