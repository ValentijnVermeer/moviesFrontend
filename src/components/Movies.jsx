import CategoryLinks from './CategoryLinks';
import RecommendedMovies from './RecommendedMovies';
import PopularMovies from './PopularMovies';
import ParentHeaderHero from './ParentHeaderHero';

const Movies = () => {
	return (
		<>
			<div className='flex flex-col items-stretch'>
				<ParentHeaderHero />
				<CategoryLinks />
				<RecommendedMovies />
				<PopularMovies />
			</div>
		</>
	);
};

export default Movies;
