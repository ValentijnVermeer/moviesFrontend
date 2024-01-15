import { useEffect, useState } from 'react';
import Polygon from '../assets/public/Polygon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/popular`)
			.then((res) => {
				const shuffledMovies = shuffleArray(res.data).slice(0, 8);
				setMovies(shuffledMovies);
			})
			.catch((e) => console.error(e));
	}, []);
	const shuffleArray = (array) => {
		return array.sort(() => Math.random() - 0.5);
	};

	return (
		<div className='bg-zinc-950'>
			<div className=' pt-16 sm:px-10 px-16 sm:justify-center'>
				<div className='flex ms-16 p-4'>
					<img
						loading='lazy'
						src={Polygon}
						className='object-cover object-center w-3 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto mr-3'
					/>
					<h2
						id='popular'
						className='text-2xl font-bold tracking-tight text-white'
					>
						Popular
					</h2>
				</div>
				<div className='my-10 mx-10 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{movies !== null && Array.isArray(movies) ? (
						movies.map((movie) => (
							<Link
								key={movie.id}
								to={`/movies/${movie.id}`}
							>
								<div
									key={movie.id}
									className='group relative px-16'
								>
									<div className='relative w-60 object-center overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
										<img
											src={movie.poster}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										/>
										<div className='absolute bottom-0 left-0 mt-4 flex justify-center w-full backdrop-blur-3xl text-white'>
											<div>
												<h3 className='text-xl text-white font-semibold text-center'>
													{movie.title}
												</h3>
												<h3 className='text-xl text-white font-semibold text-center'>
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
		</div>
	);
};

export default PopularMovies;
