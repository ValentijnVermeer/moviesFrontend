import Genres from './Genres';
import RecommendedMovies from './RecommendedMovies';
import PopularMovies from './PopularMovies';
import ParentHeaderHero from './ParentHeaderHero';

const Movies = () => {
	return (
		<>
			<div className='flex flex-col items-stretch'>
				<ParentHeaderHero />
				<Genres />
				<RecommendedMovies />
				<PopularMovies />
			</div>
		</>
	);
};

export default Movies;
