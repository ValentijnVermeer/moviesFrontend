import React from 'react'

const CategoryLinks = () => {
  return (
    <div className="bg-zinc-950 flex w-full flex-col py-12 max-md:max-w-full">
    <div className="items-start self-stretch flex justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-sm font-medium leading-4 whitespace-nowrap items-stretch bg-orange-500 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Action
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Comedy
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Adventure
            </div>
            <div className="text-white text-sm font-medium leading-4 whitespace-nowrap items-stretch bg-orange-500 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Drama
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Animation
            </div>
            <div className="text-white text-sm font-medium leading-4 whitespace-nowrap items-stretch bg-orange-500 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Fantasy
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Family
            </div>
            <div className="text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5">
              Horror
            </div>
          </div>
          </div>
  )
}

export default CategoryLinks