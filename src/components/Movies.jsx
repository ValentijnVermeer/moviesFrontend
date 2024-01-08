import React from "react";
import CarouselElement from "./CarouselElement";
import CategoryLinks from "./CategoryLinks";
import RecommendedMovies from "./RecommendedMovies";
import PopularMovies from "./PopularMovies";
import Series from "./Series";
import ActionMovies from "./ActionMovies";
import ParentHeaderHero from "./ParentHeaderHero";


const Movies = () => {
  return (
 <>


    <div className="flex flex-col items-stretch">
    <ParentHeaderHero />
    {/* <CarouselElement /> */}
    <CategoryLinks />
    <RecommendedMovies />
    <PopularMovies />
    <Series />
    <ActionMovies />
    </div>
    </>
  );
};

export default Movies;
