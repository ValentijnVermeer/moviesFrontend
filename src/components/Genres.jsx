import { Button, ButtonGroup } from '@material-tailwind/react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Genres = () => {
	const [genres, setGenres] = useState([]);
	const [movies, setMovies] = useState([]);
	const [selectedGenreId, setSelectedGenreId] = useState(null);
	const [activeButton, setActiveButton] = useState(null);
	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_SERVER_BASE_URL}/api/genres/`
				);
				setGenres(response.data);
			} catch (error) {
				console.error('Failed to fetch genres:', error);
			}
		};
		fetchGenres();
		const resetActiveButton = () => setActiveButton(null);
		document.addEventListener('click', resetActiveButton);

		return () => {
			document.removeEventListener('click', resetActiveButton);
		};
	}, []);

	useEffect(() => {
		const fetchMoviesByGenre = async () => {
			if (selectedGenreId) {
				try {
					const response = await axios.get(
						`${
							import.meta.env.VITE_SERVER_BASE_URL
						}/api/movies/genre/${selectedGenreId}`
					);
					setMovies(response.data);
				} catch (error) {
					console.error('Failed to fetch movies for genre:', error);
				}
			}
		};

		fetchMoviesByGenre();
	}, [selectedGenreId]);

	const handleButtonClick = (genreId) => {
		setSelectedGenreId(genreId);
		setActiveButton(genreId);
	};

	return (
		<div className='px-3 py-3 sm:px-3 sm:py-5 bg-zinc-950 mt-3'>
			<div className=' flex w-full flex-col py-2 max-md:max-w-full'>
				<ButtonGroup className='items-start flex justify-between gap-5 px-5 max-md:max-w-full flex-wrap justify-evenly items-center'>
					{genres.map((genre) => {
						const isActive = activeButton === genre.id;
						const buttonClass = isActive ? 'bg-orange-600' : 'bg-zinc-900';
						return (
							<Button
								key={genre.id}
								onClick={(e) => {
									e.stopPropagation();
									handleButtonClick(genre.id);
								}}
								className={`text-white text-sm leading-4 whitespace-nowrap items-stretch ${buttonClass} self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5 hover:bg-orange-600`}
							>
								{genre.title}
							</Button>
						);
					})}
				</ButtonGroup>
			</div>
			<div className='pt-16 sm:px-10 px-16 sm:justify-center'>
				<div className='my-3 pt-16 mx-3 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{movies !== null && Array.isArray(movies) ? (
						movies.map((movie) => (
							<Link
								key={movie.id}
								to={`/movies/${movie.id}`}
							>
								<div
									key={movie.id}
									className='group relative mx-16 sm:object-center'
								>
									<div className='relative aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 w-60 group-hover:opacity-75 lg:h-80'>
										<img
											src={movie.poster}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										/>
										<div className='absolute bottom-0 left-0 mt-4 flex justify-center text-white w-full backdrop-blur-3xl'>
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

export default Genres;
