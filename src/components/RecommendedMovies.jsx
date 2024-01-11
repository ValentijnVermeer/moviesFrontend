import React, { useEffect, useState } from 'react';
import Polygon from '../assets/public/Polygon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecommendedMovies = () => {
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
		<div className='bg-zinc-950 flex w-full flex-col py-12 max-md:max-w-full'>
			<div className='self-center flex w-full max-w-[1141px] flex-col items-start max-md:max-w-full'>
				<div className='flex items-center gap-2.5 mt-14 px-5 max-md:mt-10'>
					<img
						loading='lazy'
						src={Polygon}
						className='aspect-[0.83] object-contain object-center w-2.5 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto'
					/>
					<div className='text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap'>
						Popular
					</div>
				</div>
			</div>

			<div className='flex items-stretch justify-between gap-5 mt-12 px-5 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10'>
				{movies !== null && Array.isArray(movies) ? (
					movies.map((movie) => (
						<div
							key={movie.id}
							className='flex grow basis-[0%] flex-col justify-center items-stretch rounded-md'
						>
							<div className='flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-full justify-center items-stretch'>
								<img
									src={movie.poster}
									className='absolute h-full w-full object-cover object-center inset-0'
								/>
								<div className='relative justify-end flex flex-col pb-6 items-end'>
									{/* <div className="z-[1] flex w-[127px] max-w-full flex-col justify-center pl-4 pr-16 py-12 items-start max-md:pr-5">
      <img
        loading="lazy"
        src={movie.poster}
        className="aspect-square object-contain object-center w-full overflow-hidden mt-32 mb-24 max-md:my-10"
      />
    </div> */}
									<div className='self-stretch flex flex-col items-stretch -mt-40 px-6 max-md:px-5'>
										<div className='flex flex-col items-stretch'>
											<div className='text-white text-sm leading-4 items-stretch bg-orange-500 justify-center px-2 py-1 rounded-md'>
												Fantasy
											</div>
											{/* <img
          loading="lazy"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
          className="aspect-[13.5] object-contain object-center w-[216px] items-start overflow-hidden self-center mt-4"
        /> */}
										</div>
										<div className='text-white text-2xl font-medium leading-8 mt-4'>
											{movie.title}
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p>ada</p>
				)}
			</div>
		</div>
	);
};

export default RecommendedMovies;
