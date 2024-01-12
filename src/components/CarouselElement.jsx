import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const CarouselElement = () => {
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

	const indicatorWidthPercent = movies.length > 0 ? 100 / movies.length : 100;

	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		const sliderCurrent = sliderRef.current;

		if (!sliderCurrent) {
			return;
		}

		const slides = sliderCurrent.querySelectorAll('div');
		const slidesArray = Array.from(slides);
		console.log(slides);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = slidesArray.indexOf(entry.target);
						setCurrentSlideIndex(index);
					}
				});
			},
			{
				root: sliderCurrent,
				threshold: 0.5,
			}
		);
		slides.forEach((slide) => observer.observe(slide));

		return () => slides.forEach((slide) => observer.unobserve(slide));
	}, []);

	return (
		<div className='w-full'>
			{/* Slider */}
			<div
				ref={sliderRef}
				className='w-full flex flex-row overflow-x-scroll snap-x snap-mandatory'
				style={{
					paddingBottom: '15px',
					clipPath: 'inset(0 0 15px 0)',
				}}
			>
				{Array.isArray(movies) &&
					movies.map((movie) => {
						return (
							<div
								key={movie.id}
								className='w-full flex-shrink-0 snap-start'
							>
								<img src={movie.poster} />
							</div>
						);
					})}
			</div>

			{/* Scroll indicator */}
			<div className='w-full h-0.5 relative bg-gray-300'>
				<div
					className='h-0.5 absolute top-0 left-0 bg-gray-500'
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
