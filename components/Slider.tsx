import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
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
        <Slider {...settings}>
          <div>
            <h3>제주도항공권</h3>
          </div>
          <div>
            <h3>신라호텔</h3>
          </div>
          <div>
            <h3>돌아온 동남아 특가</h3>
          </div>
          <div>
            <h3>초특가 물놀이</h3>
          </div>
          <div>
            <h3>5성급 수영장</h3>
          </div>
          <div>
            <h3>여행자보험</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
