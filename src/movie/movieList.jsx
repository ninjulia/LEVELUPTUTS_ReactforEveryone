import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, resetMovie } from './actions';

//import components
import { MovieGrid } from './styles';
import Movie from './movie';

const MovieList = ({ getMovies, resetMovie, movies, moviesLoadedAt, isLoaded }) => {
	//set movie data on page
	useEffect(() => {
		const hour = 60 * 60 * 1000;
		if (!isLoaded || new Date() - new Date(moviesLoadedAt) > hour) getMovies();
		return () => {
			resetMovie();
		};
	});

	return !isLoaded ? (
		<h1>Loading...</h1>
	) : (
		<MovieGrid>
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					movieData={movie}
				/>
			))}
		</MovieGrid>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies.movies,
	isLoaded: state.movies.moviesLoaded,
	moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getMovies,
			resetMovie,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
