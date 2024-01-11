import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";
import Star from "../assets/public/StarGold.png";

const TestCarousel2 = () => {

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="bg-zinc-950 custom-height-val">
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         




    {movies !== null ? (
        movies.map((movie) => (

        <div className="duration-700 ease-in-out" data-carousel-item>
            <div className="bg-zinc-950 flex h-full items-center justify-center bg-zinc-950 dark:bg-gray-700 dark:text-white">
              <div className="flex h-full items-center justify-center bg-zinc-950 dark:bg-gray-700 dark:text-white">
                <div className=" flex w-full flex-col justify-center items-stretch max-md:max-w-full">
                  <div className="flex-col overflow-hidden relative flex w-full items-stretch pb-12 max-md:max-w-full">
                    <div className="relative flex w-[776px] max-w-full flex-col ml-36 mt-28 mb-24 self-start items-start max-md:my-10 text-left">
                      <div className="text-white text-xs font-bold whitespace-nowrap bg-orange-500 aspect-[2.5] justify-center items-stretch px-3.5 py-1.5 rounded-[100px]">
                        TOP
                      </div>
                      <div className="text-white text-6xl font-semibold self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
                        {movie.title}
                      </div>
                      <div className="text-white text-sm self-stretch mt-6 w-3/5">
                        {movie.description}
                      </div>
                      <div className="text-white text-sm font-medium self-stretch mt-8 max-md:max-w-full">
                        {movie.year} |{" "}
                        <span className="text-orange-500">
                          {movie.age_rating}+{" "}
                        </span>
                      </div>
                      <div className="flex justify-between gap-2 mt-6 items-start max-md:max-w-full max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src={Star}
                          className="aspect-[1.16] object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-2xl font-semibold">
                          {movie.rating}
                        </div>
                      </div>
                      <div className="shadow-lg bg-orange-500 flex items-stretch gap-1.5 mt-10 px-7 py-4 rounded-[100px] max-md:px-5">
                        <div className="text-white text-sm font-semibold grow whitespace-nowrap self-start">
                          WATCH
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        ))
        )
 
        : (
            <p>No movie found!</p>
          )}
        
   
        
 
 
    
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
</div>
</div>
  )
}

export default TestCarousel2