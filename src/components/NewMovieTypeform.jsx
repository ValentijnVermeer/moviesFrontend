import React, {useState} from 'react'
import NewMovieMovie from './NewMovieMovie'
import NewMovieDirector from './NewMovieDirector'
import NewMovieActor from './NewMovieActor'

const NewMovieTypeform = () => {

    const [activeComponent, setActiveComponent] = useState(1);

    const componentMap = {
      1: <NewMovieMovie />,
      2: <NewMovieDirector />,
      3: <NewMovieActor />
    };

    const handleNext = () => {
        setActiveComponent((prevComponent) =>
          prevComponent < 4 ? prevComponent + 1 : prevComponent
        );
      };

      const handleBack = () => {
        setActiveComponent((prevComponent) =>
          prevComponent > 1 ? prevComponent - 1 : prevComponent
        );
      };


  return (
    <>
    <div className="bg-zinc-950 flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
        <div className="text-white text-opacity-50 text-xs max-md:max-w-full">
          <div className=" p-4 rounded-lg max-w-xl mx-auto"></div>
    <h2
						id='top_rated'
						className='text-2xl font-bold tracking-tight text-white mb-4'
					>
						Add a new movie
					</h2>
    {componentMap[activeComponent]}
    <div className="levels example">
        <button onClick={handleBack} hidden={activeComponent === 1}>
          Previous
        </button>
        <button
          onClick={handleNext}
          hidden={activeComponent === Object.keys(componentMap).length}
        >
          Next
        </button>
        <button
          onClick={handleNext}
          hidden={activeComponent === 1  || activeComponent === 2}
        >
          Submit
        </button>
      </div>
      </div>
      </div>
      </div>
      



    </>
  )
}

export default NewMovieTypeform