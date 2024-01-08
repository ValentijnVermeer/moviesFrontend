import React from 'react'

const Header = () => {
  return (

    <header className="bg-zinc-950 flex-col overflow-hidden relative flex w-full items-stretch max-md:max-w-full">
    <div className="relative bg-zinc-950 bg-opacity-0 flex w-full flex-col justify-center items-center px-16 py-8 border-b-[0.5px] border-b-zinc-300 border-b-opacity-50 border-solid max-md:max-w-full max-md:px-5">
    <div className="flex w-full max-w-[1141px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
      {/* <img
        loading="lazy"
        srcSet="..."
        className="aspect-[3.21] object-contain object-center w-[125px] overflow-hidden self-stretch shrink-0 max-w-full"
      /> */}
      <div className="text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap text-left">
        <span className='text-orange-500'>CitrusCinema</span>&#127818; 
      </div>
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
        <div className="text-gray-200 text-base font-medium">
          Movies
        </div>
        <div className="text-gray-200 text-base font-medium">
          Series
        </div>
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
  </header>
  )
}

export default Header