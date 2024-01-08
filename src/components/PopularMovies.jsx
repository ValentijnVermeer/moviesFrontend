import React from 'react'
import Polygon from "../assets/public/Polygon.png"

const PopularMovies = () => {
  return (
<div className="bg-zinc-950 flex w-full flex-col py-12 max-md:max-w-full">
      <div className="self-center flex w-full max-w-[1141px] flex-col items-start max-md:max-w-full">
        <div className="flex items-center gap-2.5 mt-14 px-5 max-md:mt-10">
          <img
            loading="lazy"
            src={Polygon}
            className="aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
            Popular
          </div>
        </div>
      </div>
      <div className="flex items-stretch justify-between gap-5 mt-12 px-5 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        {/* Movie 1 */}
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
          <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
            <img
              loading="lazy"
              srcSet="..."
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative justify-end flex flex-col pb-6 items-end">
              <div className="z-[1] flex w-[127px] max-w-full flex-col justify-center pl-4 pr-16 py-12 items-start max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4350c0ab05eef11ec44246f58f3ad8687ce29a5a44b7df24184656ea29c15445?"
                  className="aspect-square object-contain object-center w-full overflow-hidden mt-32 mb-24 max-md:my-10"
                />
              </div>
              <div className="self-stretch flex flex-col items-stretch -mt-40 px-6 max-md:px-5">
                <div className="flex flex-col items-stretch">
                  <div className="text-white text-sm leading-4 items-stretch bg-orange-500 justify-center px-2 py-1 rounded-md">
                    Fantasy
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[13.5] object-contain object-center w-[216px] items-start overflow-hidden self-center mt-4"
                  />
                </div>
                <div className="text-white text-2xl font-medium leading-8 mt-4">
                  Wonder Woman 1984
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Movie 1 */}

        {/* Movie 2 */}
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
          <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
            <img
              loading="lazy"
              srcSet="..."
              className="absolute h-full w-full object-cover object-center inset-0"
            />{" "}
            <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
              <div className="text-white text-sm leading-4 items-stretch rounded bg-orange-500 self-stretch justify-center mt-56 px-2 py-1 max-md:mt-10">
                Action
              </div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc2b3bf81a1c8087d81057956ecb4e4691893b817dc12813d32d3a1b824d430?"
                className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
              />{" "}
              <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                Thunder Force
              </div>
            </div>
          </div>
        </div>
        {/* Movie 2 */}
      </div>
    </div>
  )
}

export default PopularMovies