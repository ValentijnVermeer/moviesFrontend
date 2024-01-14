import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarouselElement = () => {
	const [movies, setMovies] = useState([]);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`
				);
				setMovies(response.data);
			} catch (error) {
				console.error('Failed to fetch movies:', error);
			}
		};
		fetchMovies();
	}, []);

	const indicatorWidthPercent = movies.length > 0 ? 100 / movies.length : 100;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlideIndex((prevIndex) =>
				prevIndex === movies.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [movies.length]);

	const goToPreviousSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			prevIndex === 0 ? movies.length - 1 : prevIndex - 1
		);
	};

	const goToNextSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			prevIndex === movies.length - 1 ? 0 : prevIndex + 1
		);
	};

	const navigate = useNavigate();

	const handleWatchClick = (movieId) => {
		navigate(`/movies/${movieId}`);
	};

	return (
		<div className='w-full z--10'>
			<button
				onClick={goToPreviousSlide}
				className='absolute left-8 top-1/4 transform -translate-y-1/4 -translate-x-full z-10 py-5 px-3 bg-black bg-opacity-5 text-2xl h-4/6 mt-1 ms-5 car-button'
			>
				◀︎
			</button>

			<button
				onClick={goToNextSlide}
				className='absolute right-8 top-1/4 transform -translate-y-1/4 translate-x-full z-10 font-bold text-white py-5  px-3 mt-1 me-5 bg-black bg-opacity-5 text-2xl h-4/6 car-button'
			>
				▶︎
			</button>

			{/* Slider */}
			<div
				ref={sliderRef}
				className='w-full'
			>
				{Array.isArray(movies) &&
					movies.map((movie, index) => {
						return (
							<div
								key={movie.id}
								className={`relative w-full h-full p-0 m-0 snap-start bg-black ${
									index === currentSlideIndex ? '' : 'hidden'
								}`}
								style={{ height: '40rem' }}
							>
								<div
									className='absolute p-0 m-0 inset-0 z-0 bg-cover bg-center'
									style={{ backgroundImage: `url(${movie.big_poster})` }}
								/>
								<div className='absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent'></div>

								<div className='absolute bottom-10 left-10'>
									<h2 className='p-5 text-white text-xl font-semibold'>
										{movie.title}
									</h2>
									<h3 className='text-white text-sm max-w-md ps-5 pb-5'>
										{movie.year}
									</h3>
									<p className='text-white text-md max-w-md p-5'>
										{movie.description}
									</p>
									<h3 className='text-white text-sm max-w-md ps-5 py-2'>
										PG {movie.age_rating}
									</h3>
									<h3 className='text-white text-sm max-w-md ps-5 py-2'>
										⭐️ {movie.rating}
									</h3>
									<button
										onClick={() => handleWatchClick(movie.id)}
										className='mt-2 ms-3 bg-orange-500 text-white px-5 py-2 rounded-full'
									>
										See {movie.title} Details
									</button>
								</div>
							</div>
						);
					})}
			</div>

			{/* Scroll indicator */}
			<div className='w-full h-1 relative bg-black-300 mt-0 '>
				<div
					className='h-1 absolute top-0 left-0 bg-orange-500'
					style={{
						width: `${indicatorWidthPercent}%`,
						left: `${indicatorWidthPercent * currentSlideIndex}%`,
						transition: 'left 150ms ease-in-out',
					}}
				/>
			</div>
		</div>
	);
};
export default CarouselElement;
