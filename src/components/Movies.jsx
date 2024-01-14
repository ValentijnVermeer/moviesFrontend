import Genres from './Genres';
import RecommendedMovies from './RecommendedMovies';
import PopularMovies from './PopularMovies';
import ParentHeaderHero from './ParentHeaderHero';
import LoadingPage from './LoadingPage'
import { useEffect, useState } from 'react';

const Movies = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		console.log(loading)
	}, [loading])

	return (
		<>
		<div className={!loading?'hidden':'inline'}>
				<LoadingPage />
				</div>
			<div className={loading?'hidden':'flex flex-col items-stretch'}>
					<ParentHeaderHero setLoading={setLoading} />
					<Genres />
					<RecommendedMovies/>
					<PopularMovies />
			</div>
		</>
	);
};

export default Movies;
