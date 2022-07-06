import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/Slider";
import Cardmedia from "../components/CardMedia";

export default function MediaCard() {
  return (
    <>
      <div>
        <h1>여행이 돌아왔어요.</h1>
      </div>

      <Cardmedia></Cardmedia>
      <Slider></Slider>
    </>
  );
}
