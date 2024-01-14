import Genres from './Genres';
import RecommendedMovies from './RecommendedMovies';
import PopularMovies from './PopularMovies';
import ParentHeaderHero from './ParentHeaderHero';
import { useEffect, useState } from 'react';

const Movies = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading((loading) => !loading);
	}, 500);
	}, [])
	return (
		<>
			{loading?
			<div class="flex items-center justify-center min-h-screen p-5 bg-black-900 min-w-screen">
				<div class="flex space-x-2 animate-pulse">
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
				</div>
				:<div className='flex flex-col items-stretch'>
								<ParentHeaderHero />
								<Genres />
								<RecommendedMovies />
								<PopularMovies />
							</div>}
		</>
	);
};

export default Movies;
