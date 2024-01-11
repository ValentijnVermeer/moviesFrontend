import React from "react";
import Header from "./Header";
import CarouselElement from "./CarouselElement";
import HeroImageSpiderMan from "../assets/public/HeroImageSpiderMan.png"

const ParentHeaderHero = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${HeroImageSpiderMan})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <Header />
      <CarouselElement />
    </div>
  );
};

export default ParentHeaderHero;
