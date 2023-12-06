import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, resetMovie } from './actions';

//import components
import { MovieGrid } from './styles';
import Movie from './movie';

//animation
const variants = {
	initial: { opacity: 0, y: -100, transition: { duration: 1 }, delay: 1, beforeChildren: true },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -100 },
};

const movieVariants = {
	initial: { opacity: 0, x: -100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -100 },
};

const MovieList = ({ getMovies, resetMovie, movies, moviesLoadedAt, isLoaded, pageTitle }) => {
	//set movie data on page
	useEffect(() => {
		const hour = 60 * 60 * 1000;
		if (!isLoaded || new Date() - new Date(moviesLoadedAt) > hour) getMovies();
		return () => {
			resetMovie();
		};
	});

	//set page title
	useEffect(() => {
		document.title = pageTitle;
	}, [pageTitle]);

	return !isLoaded ? (
		<h1>Loading...</h1>
	) : (
		<MovieGrid
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit">
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					movieData={movie}
					variants={movieVariants}
					initial="initial"
					animate="animate"
					exit="exit"
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
