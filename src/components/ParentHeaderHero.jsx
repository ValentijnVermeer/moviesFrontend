import React from "react";
import Header from "./Header";
import CarouselElement from "./CarouselElement";
import HeroImageSpiderMan from "../assets/public/HeroImageSpiderMan.png"
import TestCarousel from "./TestCarousel";
import TestCarousel2 from "./TestCarousel2";
import CenterCarousel from "./CenterCarousel";

const ParentHeaderHero = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${HeroImageSpiderMan})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <Header />
      <CarouselElement />
      <TestCarousel />
      <CenterCarousel />
      {/* <TestCarousel2 /> */}
    </div>
  );
};

export default ParentHeaderHero;
