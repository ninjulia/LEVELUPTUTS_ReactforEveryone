import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from './actions';
//import components
import { Poster, MovieWrapper, MovieInfo } from './styles';

function MovieDetail({ getMovie, movie, movieLoadedAt, isLoaded }) {
	//set movie info
	const movieID = useParams().id;

	const [title, setTitle] = useState('');
	document.title = title;

	useEffect(() => {
		const hour = 60 * 60 * 1000;
		if (!isLoaded || new Date() - new Date(movieLoadedAt) > hour) getMovie(movieID);
	}, [movieID]);

	useEffect(() => {
		setTitle(movie.title);
	});

	const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
	const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

	return (
		<MovieWrapper $backdrop={movie.backdrop_path ? `${BACKDROP_PATH}${movie.backdrop_path}` : ''}>
			<MovieInfo>
				<Poster
					src={movie.poster_path ? `${POSTER_PATH}${movie.poster_path}` : ''}
					alt={movie.title}
				/>
				<div>
					<h1>{movie.title}</h1>
					<h2>{movie.release_date}</h2>
					<p>{movie.overview}</p>
				</div>
			</MovieInfo>
		</MovieWrapper>
	);
}

const mapStateToProps = (state) => ({
	movie: state.movies.movie,
	isLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getMovie,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
