import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Polygon from '../assets/public/Polygon.png';
import axios from 'axios';

function ArtistDetails() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/artist/${id}`)
    .then(res => {
      console.log(res.data[0]);
      setArtist(res.data[0]);
      setTimeout(() => {
				setLoading(false);
		}, 500);
    })
    .catch(e => console.error(e)); 

    axios
    .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/artist/${id}`)
    .then(res => {
      console.log(res.data)
      setMovies(res.data);
    })
    .catch(e => console.error(e)); 

  }, []);




  return (
    <>
    {!loading?
    <div className="bg-zinc-950 flex flex-col items-stretch pb-11">
    <div className="self-center flex w-full max-w-[1140px] flex-col mt-12 px-5 items-start max-md:max-w-full max-md:mt-10">
      <div className="w-[507px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center max-md:mt-10">
              <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-[200px] items-stretch pb-12">
                <img
                  loading="lazy"
                  srcSet={artist.photo}
                  className="absolute h-full w-full object-cover object-center inset-0" />  
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-4 max-md:mt-10">
              <div className="text-left text-white text-2xl font-semibold">
                {artist.first_name +' '+ artist.second_name}
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">First Name: </span>{" "}
                <span className="text-orange-500">{artist.first_name} </span>
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">Surname: </span>{" "}
                <span className="text-orange-500">{artist.second_name} </span>
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">Age: </span>{" "}
                <span className="text-orange-500">{artist.date_of_birth} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
  </div>:<div class="flex items-center justify-center min-h-screen p-5 bg-black-900 min-w-screen">
				<div class="flex space-x-2 animate-pulse">
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
				</div>}
  {movies?.as_starring_actors?.length!==0?<div className='bg-zinc-950 pb-10'>
			<div className='pt-16 sm:px-10 px-16 sm:justify-center'>
				<div className='flex ms-7 p-1'>
					<img
						loading='lazy'
						src={Polygon}
						className='object-cover object-center w-3 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto mr-3'
					/>
					<h2
						id='top_rated'
						className='text-2xl font-bold tracking-tight text-white'
					>
						<span className='flex'>Movies Where <span className='text-orange-500 mx-2'>{artist.first_name +' '+ artist.second_name}</span> Starring</span>
					</h2>
				</div>
				<div className='my-10 mx-10 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{movies?.as_starring_actor !== null && Array.isArray(movies?.as_starring_actor) ? (
						movies.as_starring_actor.map((movie) => (
							<Link
								key={movie.id}
								to={`/movies/${movie.id}`}
							>
								<div
									key={movie.id}
									className='group relative px-16'
								>
									<div className='relative object-center w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
										<img
											src={movie.poster}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										/>
										<div className='absolute bottom-3 left-2 mt-4 flex justify-between text-white'>
											<div>
												<h3 className='text-xl text-white font-semibold'>
													{movie.title}
												</h3>
												<h3 className='text-xl text-white font-semibold'>
													⭐️ {movie.rating}
												</h3>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))
					) : (
						<p>No movie found!</p>
					)}
				</div>
			</div>
		</div>:<div class="flex items-center justify-center min-h-screen p-5 bg-black-900 min-w-screen">
				<div class="flex space-x-2 animate-pulse">
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
				</div>}
    
  </>
  )
}

export default ArtistDetails