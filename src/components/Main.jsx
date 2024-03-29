import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import UpdateMovie from './UpdateMovie';
import ArtistDetails from './ArtistDetails';
import NewMovieTypeform from './NewMovieTypeform'

const Main = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<Movies />}
				/>
				<Route
					path='/movies/new'
					element={<NewMovieTypeform />}
				/>
				<Route
					path='/movies/:id'
					element={<MovieDetails />}
				/>
				<Route
					path='/movies/:id/update'
					element={<UpdateMovie />}
				/>
				<Route
					path='/artists/:id/'
					element={<ArtistDetails />}
				/>
			</Routes>
		</div>
	);
};

export default Main;
