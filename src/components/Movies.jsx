import React from "react";
import CarouselElement from "./CarouselElement";
import CategoryLinks from "./CategoryLinks";
import RecommendedMovies from "./RecommendedMovies";
import PopularMovies from "./PopularMovies";
import ParentHeaderHero from "./ParentHeaderHero";
import CenterCarousel from "./CenterCarousel";


const Movies = () => {
  return (
 <>


    <div className="flex flex-col items-stretch">
    <ParentHeaderHero />
    {/* <CarouselElement /> */}
    <CategoryLinks />
    <RecommendedMovies />
    <CenterCarousel />
    <PopularMovies />
    </div>
    </>
  );
};

export default Movies;
