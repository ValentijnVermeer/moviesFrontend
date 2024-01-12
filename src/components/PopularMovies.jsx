import { useEffect, useState } from 'react';
import Polygon from '../assets/public/Polygon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
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
		<div className='bg-zinc-950'>
			<div className='max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-16'>
				<div className='flex'>
					<img
						loading='lazy'
						src={Polygon}
						className='object-cover object-center w-3 fill-red-600 overflow-hidden shrink-0 max-w-full my-auto mr-3'
					/>
					<h2 className='text-2xl font-bold tracking-tight text-white'>
						Popular
					</h2>
				</div>
				<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{movies !== null && Array.isArray(movies) ? (
						movies.map((movie) => (
							<Link
								key={movie.id}
								to={`/movies/${movie.id}`}
							>
								<div
									key={movie.id}
									className='group relative'
								>
									<div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
										<img
											src={movie.poster}
											// alt={movie.alttext}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										/>
										<div className='absolute bottom-3 left-2 mt-4 flex justify-between text-white'>
											<div>
												<h3 className='text-xl text-white font-semibold'>
													{movie.title}
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
