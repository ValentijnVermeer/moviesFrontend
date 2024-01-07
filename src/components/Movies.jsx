import React from "react";

const Movies = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-zinc-950 flex w-full flex-col justify-center items-stretch max-md:max-w-full">
        <div className="flex-col overflow-hidden relative flex min-h-[750px] w-full items-stretch pb-12 max-md:max-w-full">
          <div className="relative flex w-[776px] max-w-full flex-col ml-36 mt-28 mb-24 self-start items-start max-md:my-10">
            <div className="text-white text-xs font-bold whitespace-nowrap bg-red-600 aspect-[2.5] justify-center items-stretch px-3.5 py-1.5 rounded-[100px]">
              TOP
            </div>
            <div className="text-white text-6xl font-semibold self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
              Spider man no way home{" "}
            </div>
            <div className="text-white text-sm self-stretch mt-6 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem.
              Consectetur donec cursus massa nunc ullamcorper semper.
            </div>
            <div className="text-red-600 text-sm font-medium self-stretch mt-8 max-md:max-w-full">
              2022 | <span className="text-red-600">16+</span>
            </div>
            <div className="flex justify-between gap-2 mt-6 items-start max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd3c10d46afda91155e4af2e33a04819ebaa99aa5015d2ab0fdc9b6264b0c81?"
                className="aspect-[1.16] object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-2xl font-semibold">5.8</div>
              <div className="text-red-600 text-sm font-medium grow whitespace-nowrap mt-1.5">
                Seans<span className="text-red-600"> 1</span> - Eplscode{" "}
                <span className="text-red-600">1</span> - Genre{" "}
                <span className="text-red-600">
                  comedy, detective, detective{" "}
                </span>
              </div>
            </div>
            <div className="shadow-lg bg-red-600 flex items-stretch gap-1.5 mt-10 px-7 py-4 rounded-[100px] max-md:px-5">
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
      <div className="bg-zinc-950 flex w-full flex-col py-12 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1141px] flex-col items-start max-md:max-w-full">
          <div className="items-start self-stretch flex justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-sm font-medium leading-4 whitespace-nowrap items-stretch bg-red-600 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Action
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Comedy
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Adventure
            </div>
            <div className="text-white text-sm font-medium leading-4 whitespace-nowrap items-stretch bg-red-600 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Drama
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Animation
            </div>
            <div className="text-white text-sm font-medium leading-4 whitespace-nowrap items-stretch bg-red-600 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Fantasy
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Family
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Horror
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.33] object-contain object-center w-[53px] items-start overflow-hidden self-center z-[1] shrink-0 max-w-full my-auto"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31cf6b70ef49974ae1e28abd84c7f4478cda3e54fa48651019d70d0812b17381?"
            className="aspect-[1141] object-contain object-center w-full stroke-[1px] stroke-stone-900 overflow-hidden self-stretch mt-8 max-md:max-w-full"
          />
          <div className="flex items-center gap-2.5 mt-14 px-5 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01c394ff46936f79672f39b2723391a9f0f048f795f2e6771dff199a02fbf6a?"
              className="aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
              Recommended
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-12 px-5 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
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
                    <div className="text-white text-sm leading-4 items-stretch bg-red-600 justify-center px-2 py-1 rounded-md">
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
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-48 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc2b3bf81a1c8087d81057956ecb4e4691893b817dc12813d32d3a1b824d430?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                  Zack Snyder's Justice League
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc2b3bf81a1c8087d81057956ecb4e4691893b817dc12813d32d3a1b824d430?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Mortal Kombat
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Drama
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc2b3bf81a1c8087d81057956ecb4e4691893b817dc12813d32d3a1b824d430?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  The Courier
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch rounded bg-red-600 self-stretch justify-center mt-56 px-2 py-1 max-md:mt-10">
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
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-between items-stretch flex gap-0 pr-6 max-md:pr-5">
                <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                  <div className="flex flex-col pl-7 pr-4 py-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6a48953c73f627c35d5e1f233d592acf0082768659aeffdf89d17bbd0f5f40?"
                      className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-32 max-md:mt-10"
                    />{" "}
                    <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch rounded bg-red-600 self-stretch justify-center mt-5 px-2 py-1">
                      Family
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b972331fcdac7ecaa9b6ac7c4e45e989a79f5f1e0a1f8d48b0888ad18d408c1?"
                      className="aspect-[5.19] object-contain object-center w-[83px] items-start overflow-hidden self-center mt-4 mb-8"
                    />
                  </div>
                </div>{" "}
                <div className="text-white text-2xl font-medium leading-8 mt-80 max-md:mt-10">
                  Peter Rabbit 2: The Runaway
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Action
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Marksman
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Comedy
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    Tom & Jerry
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Unholy
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-48 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Conjuring: The Devil Made Me Do It
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2.5 ml-40 mt-20 self-start max-md:ml-2.5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01c394ff46936f79672f39b2723391a9f0f048f795f2e6771dff199a02fbf6a?"
            className="aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto"
          />{" "}
          <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
            Popular
          </div>
        </div>{" "}
        <div className="flex items-stretch justify-between gap-5 mt-11 px-5 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pb-6 items-end">
                <div className="z-[1] flex w-32 max-w-full flex-col justify-center pl-4 pr-16 py-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4350c0ab05eef11ec44246f58f3ad8687ce29a5a44b7df24184656ea29c15445?"
                    className="aspect-square object-contain object-center w-full overflow-hidden mt-32 mb-24 max-md:my-10"
                  />
                </div>{" "}
                <div className="self-stretch flex flex-col items-stretch -mt-40 px-6 max-md:px-5">
                  <div className="flex flex-col items-stretch">
                    <div className="text-white text-sm leading-4 items-stretch bg-red-600 justify-center px-2 py-1 rounded-md">
                      Fantasy
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="aspect-[13.5] object-contain object-center w-[216px] items-start overflow-hidden self-center mt-4"
                    />
                  </div>{" "}
                  <div className="text-white text-2xl font-medium leading-8 mt-4">
                    Wonder Woman 1984
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-48 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d996aa9ebe0cc724677eb39931a0983b3a7814c66ecee2c23ba822ad6cf8b41?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                  Zack Snyder's Justice League
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bce5514df130ef0e5c4bb2bfda9ebb2b5ed80ce9702d296a74ff6eea87b1d9b9?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Mortal Kombat
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Drama
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bce5514df130ef0e5c4bb2bfda9ebb2b5ed80ce9702d296a74ff6eea87b1d9b9?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  The Courier
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch rounded bg-red-600 self-stretch justify-center mt-56 px-2 py-1 max-md:mt-10">
                  Action
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bce5514df130ef0e5c4bb2bfda9ebb2b5ed80ce9702d296a74ff6eea87b1d9b9?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Thunder Force
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-between items-stretch flex gap-0 pr-6 max-md:pr-5">
                <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                  <div className="flex flex-col pl-7 pr-4 py-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6a48953c73f627c35d5e1f233d592acf0082768659aeffdf89d17bbd0f5f40?"
                      className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-32 max-md:mt-10"
                    />
                    <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch rounded bg-red-600 self-stretch justify-center mt-5 px-2 py-1">
                      Family
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/efed3e7107e0b875afb0411cbdf622b5cc6cc3d52810668034d7db366e2c825e?"
                      className="aspect-[5.25] object-contain object-center w-[84px] items-start overflow-hidden self-center mt-4 mb-8"
                    />
                  </div>
                </div>
                <div className="text-white text-2xl font-medium leading-8 mt-80 max-md:mt-10">
                  Peter Rabbit 2: The Runaway
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Action
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Marksman
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Comedy
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    Tom & Jerry
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Unholy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-48 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Conjuring: The Devil Made Me Do It
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 ml-40 mt-20 self-start max-md:ml-2.5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01c394ff46936f79672f39b2723391a9f0f048f795f2e6771dff199a02fbf6a?"
            className="aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-white text-2xl font-medium leading-8 self-stretch">
            Series
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-12 px-5 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pb-6 items-end">
                <div className="z-[1] flex w-32 max-w-full flex-col justify-center pl-4 pr-16 py-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4350c0ab05eef11ec44246f58f3ad8687ce29a5a44b7df24184656ea29c15445?"
                    className="aspect-square object-contain object-center w-full overflow-hidden mt-32 mb-24 max-md:my-10"
                  />
                </div>
                <div className="self-stretch flex flex-col items-stretch -mt-40 px-6 max-md:px-5">
                  <div className="flex flex-col items-stretch">
                    <div className="text-white text-sm leading-4 items-stretch bg-red-600 justify-center px-2 py-1 rounded-md">
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
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-48 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7125971ae3f64126c52ddca9bc045dee2565187138c4bfce24f8d3e2622f67d?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                  Zack Snyder's Justice League
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7125971ae3f64126c52ddca9bc045dee2565187138c4bfce24f8d3e2622f67d?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Mortal Kombat
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Drama
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7125971ae3f64126c52ddca9bc045dee2565187138c4bfce24f8d3e2622f67d?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  The Courier
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch rounded bg-red-600 self-stretch justify-center mt-56 px-2 py-1 max-md:mt-10">
                  Action
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7125971ae3f64126c52ddca9bc045dee2565187138c4bfce24f8d3e2622f67d?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Thunder Force
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-between items-stretch flex gap-0 pr-6 max-md:pr-5">
                <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                  <div className="flex flex-col pl-7 pr-4 py-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6a48953c73f627c35d5e1f233d592acf0082768659aeffdf89d17bbd0f5f40?"
                      className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-32 max-md:mt-10"
                    />{" "}
                    <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch rounded bg-red-600 self-stretch justify-center mt-5 px-2 py-1">
                      Family
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cd78d3b4d319cc51e6dc0146ba093c94920cc1c40ea1fd7764290ae14c47b89?"
                      className="aspect-[5.25] object-contain object-center w-[84px] items-start overflow-hidden self-center mt-4 mb-8"
                    />
                  </div>
                </div>{" "}
                <div className="text-white text-2xl font-medium leading-8 mt-80 max-md:mt-10">
                  Peter Rabbit 2: The Runaway
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Action
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Marksman
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Comedy
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    Tom & Jerry
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Unholy
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-48 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />{" "}
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Conjuring: The Devil Made Me Do It
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-2.5 ml-40 mt-20 self-start items-start max-md:ml-2.5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01c394ff46936f79672f39b2723391a9f0f048f795f2e6771dff199a02fbf6a?"
            className="aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full mt-1.5"
          />{" "}
          <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
            Multifilms
          </div>
        </div>{" "}
        <div className="flex items-stretch justify-between gap-5 mt-12 px-5 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pb-6 items-end">
                <div className="z-[1] flex w-32 max-w-full flex-col justify-center pl-4 pr-16 py-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4350c0ab05eef11ec44246f58f3ad8687ce29a5a44b7df24184656ea29c15445?"
                    className="aspect-square object-contain object-center w-full overflow-hidden mt-32 mb-24 max-md:my-10"
                  />
                </div>{" "}
                <div className="self-stretch flex flex-col items-stretch -mt-40 px-6 max-md:px-5">
                  <div className="flex flex-col items-stretch">
                    <div className="text-white text-sm leading-4 items-stretch bg-red-600 justify-center px-2 py-1 rounded-md">
                      Fantasy
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="aspect-[13.5] object-contain object-center w-[216px] items-start overflow-hidden self-center mt-4"
                    />
                  </div>{" "}
                  <div className="text-white text-2xl font-medium leading-8 mt-4">
                    Wonder Woman 1984
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-48 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f0501849df701dd648f3cd7d24cccae2de3b713ed8e86b6c2c8f40f411ed37?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />{" "}
                <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                  Zack Snyder's Justice League
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Fantasy
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f0501849df701dd648f3cd7d24cccae2de3b713ed8e86b6c2c8f40f411ed37?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Mortal Kombat
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch bg-red-600 self-stretch justify-center mt-56 px-2 py-1 rounded-md max-md:mt-10">
                  Drama
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f0501849df701dd648f3cd7d24cccae2de3b713ed8e86b6c2c8f40f411ed37?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  The Courier
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                <div className="text-white text-sm leading-4 items-stretch rounded bg-red-600 self-stretch justify-center mt-56 px-2 py-1 max-md:mt-10">
                  Action
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f0501849df701dd648f3cd7d24cccae2de3b713ed8e86b6c2c8f40f411ed37?"
                  className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                />
                <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                  Thunder Force
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-between items-stretch flex gap-0 pr-6 max-md:pr-5">
                <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                  <div className="flex flex-col pl-7 pr-4 py-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6a48953c73f627c35d5e1f233d592acf0082768659aeffdf89d17bbd0f5f40?"
                      className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-32 max-md:mt-10"
                    />
                    <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch rounded bg-red-600 self-stretch justify-center mt-5 px-2 py-1">
                      Family
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/709df5f5877e068ba8e959ec317c11a82c5ebb69a85e23ff163958c5a99c9079?"
                      className="aspect-[5.25] object-contain object-center w-[84px] items-start overflow-hidden self-center mt-4 mb-8"
                    />
                  </div>
                </div>
                <div className="text-white text-2xl font-medium leading-8 mt-80 max-md:mt-10">
                  Peter Rabbit 2: The Runaway
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Action
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Marksman
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Comedy
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    Tom & Jerry
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-56 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Unholy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch rounded-md">
            <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-col justify-center items-stretch">
                <div className="justify-end flex flex-col pt-12 pb-6 px-6 items-start max-md:px-5">
                  <div className="text-cyan-400 text-sm leading-4 items-stretch bg-stone-900 bg-opacity-50 self-stretch justify-center mt-48 px-2 py-1 rounded-none max-md:mt-10">
                    Horror
                  </div>
                  <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                  />
                  <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                    The Conjuring: The Devil Made Me Do It
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f63c6a40264333b18013a2376313d9abdfd5ac26df710f384ca11c9e02fa57?"
          className="aspect-[1440] object-contain object-center w-full stroke-[1px] stroke-stone-900 overflow-hidden self-stretch mt-36 max-md:max-w-full max-md:mt-10"
        />
      </div>
    </div>
  );
};

export default Movies;
