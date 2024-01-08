import React from "react";

const CarouselElement = () => {
  return (
    <div className=" flex w-full flex-col justify-center items-stretch max-md:max-w-full">
      <div className="flex-col overflow-hidden relative flex w-full items-stretch pb-12 max-md:max-w-full">
        <div className="relative flex w-[776px] max-w-full flex-col ml-36 mt-28 mb-24 self-start items-start max-md:my-10 text-left">
          <div className="text-white text-xs font-bold whitespace-nowrap bg-orange-500 aspect-[2.5] justify-center items-stretch px-3.5 py-1.5 rounded-[100px]">
            TOP
          </div>
          <div className="text-white text-6xl font-semibold self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
            Spider man no way home
          </div>
          <div className="text-white text-sm self-stretch mt-6 w-3/5">
            Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem.
            Consectetur donec cursus massa nunc ullamcorper semper.
          </div>
          <div className="text-white text-sm font-medium self-stretch mt-8 max-md:max-w-full">
            2022 | <span className="text-orange-500">16+ </span>{" "}
            <span className="text-white">|</span> <span>1 Season |</span>{" "}
            <span className="text-white">TV series</span>
          </div>
          <div className="flex justify-between gap-2 mt-6 items-start max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd3c10d46afda91155e4af2e33a04819ebaa99aa5015d2ab0fdc9b6264b0c81?"
              className="aspect-[1.16] object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-2xl font-semibold">5.8</div>
            <div className="text-white text-sm font-medium grow whitespace-nowrap mt-1.5">
              Season <span className="text-orange-500"> 1</span> - Episode <span className="text-orange-500">1</span> - Genre: <span className="text-orange-500">comedy, detective, action
              </span>
            </div>
          </div>
          <div className="shadow-lg bg-orange-500 flex items-stretch gap-1.5 mt-10 px-7 py-4 rounded-[100px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba533719b34c1806d9142eebc71585fb703a217af8534199cb1de876f3c3cf44?"
              className="aspect-[0.91] object-contain object-center w-2.5 fill-white overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-sm font-semibold grow whitespace-nowrap self-start">
              WATCH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselElement;
