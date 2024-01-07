import React from 'react'

const MovieDetails = () => {
  return (
    <div className="bg-zinc-950 flex flex-col items-stretch pb-11">
      <div className="bg-zinc-950 bg-opacity-0 flex w-full flex-col justify-center items-center px-16 py-8 border-b-[0.5px] border-b-zinc-300 border-b-opacity-50 border-solid max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1141px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[3.21] object-contain object-center w-[125px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div className="self-center flex items-stretch gap-1.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49e15e278a847ebf7873481da4a845908f1e123cd3216c2eb9b179937b6423ed?"
              className="aspect-[0.75] object-contain object-center w-[9px] fill-red-600 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-base font-semibold grow whitespace-nowrap self-start">
              Home
            </div>
          </div>
          <div className="self-center flex items-stretch justify-between gap-5 my-auto">
            <div className="text-gray-200 text-base font-medium">Movies</div>
            <div className="text-gray-200 text-base font-medium">Series</div>
          </div>
          <div className="self-center flex items-stretch gap-1.5 my-auto">
            <div className="text-gray-200 text-base font-medium grow whitespace-nowrap">
              My list
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60db0d062936e8bb27a58a723781d762ea1f013224e239bbc50cda4fe8a16bd7?"
              className="aspect-[1.71] object-contain object-center w-3 stroke-[1.8px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="self-center flex items-start justify-between gap-1.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5139f3c71e756a93a477b71e55b67c7c2b6a61923cac7d580cd1b99e592fba?"
              className="aspect-square object-contain object-center w-[18px] fill-white overflow-hidden shrink-0 max-w-full self-start"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7152e6ca695955df27a989658851662ba6f21ee1ad352592828771e3901dba?"
              className="aspect-square object-contain object-center w-5 stroke-[2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b44135d9c3b8927247ff63692192d0799d37488ab840f6bfd645aa80533011?"
              className="aspect-square object-contain object-center w-5 fill-white overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <div className="text-white text-xs font-semibold self-center my-auto">
              ENG
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55b7e95f0df5a794796d6c7060bdc36b3b0ad82b7eff88be2897a2b87f120720?"
              className="aspect-[1.67] object-contain object-center w-2.5 stroke-[1.5px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1140px] flex-col mt-12 px-5 items-start max-md:max-w-full max-md:mt-10">
        <div className="w-[507px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-center max-md:mt-10">
                <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-[200px] items-stretch pb-12">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-white text-sm leading-4 items-stretch bg-red-600 justify-center mb-44 px-2 py-1 rounded-md max-md:mb-10">
                    Fantasy
                  </div>
                </div>
                <div className="text-white text-2xl font-semibold self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                  About the movie
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-4 max-md:mt-10">
                <div className="text-white text-2xl font-semibold">
                  Mortal Kombat
                </div>
                <div className="text-red-600 text-sm font-medium mt-7">
                  <span className="font-semibold">Name:</span>{" "}
                  <span className="text-red-600">Mortal Kombat </span>
                </div>
                <div className="text-red-600 text-sm font-medium whitespace-nowrap mt-5">
                  <span className="font-semibold">Time:</span>{" "}
                  <span className="text-red-600">
                    2 hours 12 minutes 8 seconds
                  </span>
                </div>
                <div className="text-red-600 text-sm font-medium mt-5">
                  <span className="font-semibold">Date: </span>
                  <span className="text-red-600">2022 </span>
                </div>
                <div className="text-red-600 text-sm font-medium mt-5">
                  <span className="font-semibold">Genre:</span>{" "}
                  <span className="text-red-600">Fantasy </span>
                </div>
                <div className="text-red-600 text-sm font-medium mt-3">
                  <span className="font-semibold">Language:</span>{" "}
                  <span className="text-red-600">Uzbekch ( Tarjima ) </span>
                </div>
                <div className="flex items-stretch justify-between gap-1.5 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e8338b88c719d03234f30e672633bf231a958264e5734c3cec62992fe563fc?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-sm font-semibold my-auto">
                    1K
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/038682105ccaff18828d31b92ed447b2117b0a74bfdc0e10919d3f27444262d3?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-sm font-semibold self-center my-auto">
                    0
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-4 mt-5">
                  <div className="shadow-lg bg-red-600 flex items-stretch justify-between gap-1.5 px-7 py-4 rounded-[100px] max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba533719b34c1806d9142eebc71585fb703a217af8534199cb1de876f3c3cf44?"
                      className="aspect-[0.91] object-contain object-center w-2.5 fill-white overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white text-sm font-semibold grow whitespace-nowrap self-start">
                      WATCH
                    </div>
                  </div>
                  <div className="text-white text-sm font-semibold whitespace-nowrap bg-zinc-900 grow justify-center items-stretch px-7 py-4 rounded-[100px] max-md:px-5">
                    Download
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm leading-6 tracking-wide self-stretch mt-9 max-md:max-w-full">
          Mortal Kombat is an American series of martial arts action films based
          on the fighting video game series of the same name by Midway
          Games.The first film was produced by Lawrence Kasanoff’s Threshold
          Entertainment. The first film, Mortal Kombat, was released in 1995 and
          its sequel, Mortal Kombat: Annihilation, was released in 1997. After
          the two films, game publisher Midway filed for bankruptcy. Warner
          Bros., having become the parent of New Line Cinema in 2008 (after over
          a decade of both operating as separate divisions of Time Warner), made
          a bid to purchase most of Midway's assets, including Mortal Kombat. In
          June 2009, Kasanoff and Threshold sued in bankruptcy court, arguing
          that they owned the copyright to many of the characters from the
          series. [1] On July 1, 2009, the bankruptcy court approved the sale of
          most of Midway's assets to Warner Bros.[2] subject to the intellectual
          property claims of Threshold Entertainment.[3] After years of
          development hell, a reboot of the series was released in April 2021.
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.56] object-contain object-center w-full overflow-hidden self-stretch mt-14 max-md:max-w-full max-md:mt-10"
        />
        <div className="flex gap-3 mt-14 items-start max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fefc3103646ff08da60b910363a0d07745df585caba8a648cd1c9b8600160a5f?"
            className="aspect-square object-contain object-center w-5 fill-red-600 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
            Thoughts
          </div>
        </div>
        <div className="bg-zinc-900 self-stretch flex flex-col items-stretch mt-7 pl-12 pr-20 py-8 rounded-md max-md:max-w-full max-md:px-5">
          <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
              <div className="text-white text-opacity-50 text-xs max-md:max-w-full">
                Express an opinion
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b56d6338e0d5b15e6717d8a89eb3d5636308041b854ff69ae4b4fa9bc38d94?"
                className="aspect-[901] object-contain object-center w-full stroke-[1px] stroke-white stroke-opacity-60 overflow-hidden mt-2 max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-1">
            <div className="flex basis-[0%] flex-col items-center">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.09] object-contain object-center w-[71px] overflow-hidden"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.09] object-contain object-center w-[71px] overflow-hidden mt-9"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.09] object-contain object-center w-[71px] overflow-hidden mt-9"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.09] object-contain object-center w-[71px] overflow-hidden mt-9"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.09] object-contain object-center w-[71px] overflow-hidden mt-9"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.09] object-contain object-center w-[71px] overflow-hidden mt-9"
              />
            </div>
            <div className="self-stretch flex grow basis-[0%] flex-col mt-1.5 max-md:max-w-full">
              <div className="flex gap-3 self-start items-start">
                <div className="justify-center text-white text-sm font-medium leading-8 grow whitespace-nowrap">
                  Asadbek Shomurodov
                </div>
                <div className="text-red-600 text-xs leading-8 self-stretch whitespace-nowrap">
                  a day ago
                </div>
              </div>
              <div className="text-red-600 text-sm underline self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id
                lorem. Consectetur donec cursus massa nunc ullamcorper semper...{" "}
                <span className="underline text-red-600">More</span>
              </div>
              <div className="flex gap-3 mt-10 self-start items-start">
                <div className="justify-center text-white text-sm font-medium leading-8 grow whitespace-nowrap">
                  Asadbek Shomurodov
                </div>
                <div className="text-red-600 text-xs leading-8 self-stretch whitespace-nowrap">
                  a day ago
                </div>
              </div>
              <div className="text-red-600 text-sm underline self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id
                lorem. Consectetur donec cursus massa nunc ullamcorper semper...{" "}
                <span className="underline text-red-600">More</span>
              </div>
              <div className="flex gap-3 mt-10 self-start items-start">
                <div className="justify-center text-white text-sm font-medium leading-8 grow whitespace-nowrap">
                  Asadbek Shomurodov
                </div>
                <div className="text-red-600 text-xs leading-8 self-stretch whitespace-nowrap">
                  a day ago
                </div>
              </div>
              <div className="text-red-600 text-sm underline self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id
                lorem. Consectetur donec cursus massa nunc ullamcorper semper...{" "}
                <span className="underline text-red-600">More</span>
              </div>
              <div className="flex gap-3 mt-10 self-start items-start">
                <div className="justify-center text-white text-sm font-medium leading-8 grow whitespace-nowrap">
                  Asadbek Shomurodov
                </div>
                <div className="text-red-600 text-xs leading-8 self-stretch whitespace-nowrap">
                  a day ago
                </div>
              </div>
              <div className="text-red-600 text-sm underline self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id
                lorem. Consectetur donec cursus massa nunc ullamcorper semper...{" "}
                <span className="underline text-red-600">More</span>
              </div>
              <div className="flex gap-3 mt-10 self-start items-start">
                <div className="justify-center text-white text-sm font-medium leading-8 grow whitespace-nowrap">
                  Asadbek Shomurodov
                </div>
                <div className="text-red-600 text-xs leading-8 self-stretch whitespace-nowrap">
                  a day ago
                </div>
              </div>
              <div className="text-red-600 text-sm underline self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id
                lorem. Consectetur donec cursus massa nunc ullamcorper semper...{" "}
                <span className="underline text-red-600">More</span>
              </div>
              <div className="flex gap-3 mt-10 self-start items-start">
                <div className="justify-center text-white text-sm font-medium leading-8 grow whitespace-nowrap">
                  Asadbek Shomurodov
                </div>
                <div className="text-red-600 text-xs leading-8 self-stretch whitespace-nowrap">
                  a day ago
                </div>
              </div>
              <div className="text-red-600 text-sm underline self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id
                lorem. Consectetur donec cursus massa nunc ullamcorper semper...{" "}
                <span className="underline text-red-600">More</span>
              </div>
              <div className="text-red-600 text-sm underline mt-14 max-md:mt-10">
                More all thoughts
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 mt-14 items-start max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01c394ff46936f79672f39b2723391a9f0f048f795f2e6771dff199a02fbf6a?"
            className="aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full mt-1"
          />
          <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
            Thoughts
          </div>
        </div>
        <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch rounded-md max-md:mt-7">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f0501849df701dd648f3cd7d24cccae2de3b713ed8e86b6c2c8f40f411ed37?"
                      className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                    />
                    <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                      Wonder Woman 1984
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch rounded-md max-md:mt-7">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/709df5f5877e068ba8e959ec317c11a82c5ebb69a85e23ff163958c5a99c9079?"
                      className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                    />
                    <div className="self-stretch text-white text-2xl font-medium leading-8 mt-4">
                      Zack Snyder's Justice League
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch rounded-md max-md:mt-7">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/709df5f5877e068ba8e959ec317c11a82c5ebb69a85e23ff163958c5a99c9079?"
                      className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                    />{" "}
                    <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                      The Courier
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch rounded-md max-md:mt-7">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/709df5f5877e068ba8e959ec317c11a82c5ebb69a85e23ff163958c5a99c9079?"
                      className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                    />{" "}
                    <div className="self-stretch text-white text-2xl font-medium leading-8 whitespace-nowrap mt-4">
                      Thunder Force
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f63c6a40264333b18013a2376313d9abdfd5ac26df710f384ca11c9e02fa57?"
        className="aspect-[1440] object-contain object-center w-full stroke-[1px] stroke-stone-900 overflow-hidden mt-24 max-md:max-w-full max-md:mt-10"
      />{" "}
      <div className="self-center w-full max-w-[1139px] mt-14 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col px-5 items-start max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[3.21] object-contain object-center w-[125px] overflow-hidden max-w-full"
              />{" "}
              <div className="text-white text-xs font-medium leading-5 self-stretch mt-5 max-md:max-w-full">
                Filmlarga bo'lgan huquqlar ularning mualliflariga tegishli.
                Barcha filmlar faqat ma'lumot uchun taqdim etiladi. Ma'muriyat
                foydalanuvchilar tomonidan joylashtirilgan noqonuniy materiallar
                uchun javobgar emas! Har qanday film mualliflik huquqi egasining
                iltimosiga binoan olib tashlanadi
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="px-5 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-sm font-semibold leading-5">
                      Pages
                    </div>
                    <div className="text-white text-xs font-medium leading-5 whitespace-nowrap mt-5">
                      The most watched movies
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-3.5">
                      Top Rated Movies
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-3">
                      Movies
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-3.5">
                      Serials
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-sm font-semibold leading-5 whitespace-nowrap">
                      Our social networks
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-6">
                      Telegram
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-2.5">
                      Instagram
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-2.5">
                      Facebook
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-3.5">
                      YouTube
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-sm font-semibold leading-5 whitespace-nowrap">
                      For reference
                    </div>
                    <div className="text-white text-xs font-medium leading-5 whitespace-nowrap mt-6">
                      Telegram
                    </div>
                    <div className="text-white text-xs font-medium leading-5 whitespace-nowrap mt-2.5">
                      Instagram
                    </div>
                    <div className="text-white text-xs font-medium leading-5 whitespace-nowrap mt-2.5">
                      Whatsapp
                    </div>
                    <div className="text-white text-xs font-medium leading-5 mt-3">
                      Skype
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-sm font-medium leading-8 mt-36 max-md:mt-10">
        © Filmberry.com - 2023
        <br />
      </div>
    </div>
  )
}

export default MovieDetails