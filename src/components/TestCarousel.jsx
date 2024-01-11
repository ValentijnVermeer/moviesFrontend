"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";
import Star from "../assets/public/StarGold.png";
import HeroImageSpiderMan from "../assets/public/HeroImageSpiderMan.png"

const TextCarousel = () => {
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
    <div className="flex justify-start bg-zinc-950 custom-height-val" style={{backgroundImage: `url(${HeroImageSpiderMan})`, backgroundSize: 'cover'}}>
      <Carousel indicators={false} controls={false} >
        {movies !== null ? (
          movies.map((movie) => (
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
          ))
        ) : (
          <p>No movie found!</p>
        )}
      </Carousel>
    </div>
  );
};

export default TextCarousel;
