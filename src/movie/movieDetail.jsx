import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from './actions';
//import components
import { Poster } from './movie';

function MovieDetail({ getMovie, movie, movieLoadedAt, isLoaded }) {
	const movieID = useParams().id;

	useEffect(() => {
		const hour = 60 * 60 * 1000;
		if (!isLoaded || new Date() - new Date(movieLoadedAt) > hour) getMovie(movieID);
	}, [movieID]);

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

//styling should go in separate file, can use shorthand for CSS, but more verbose = more better, right?
const MovieWrapper = styled.div`
	position: relative;
	padding-block-start: 50vh;
	background-image: url(${(props) => props.$backdrop});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

const MovieInfo = styled.div`
	background-color: #fff;
	text-align: left;
	padding: 2rem 10%;
	display: flex;

	> div {
		margin-inline-start: 1.75rem;
	}

	img {
		position: relative;
		top: -5rem;
	}

	p {
		max-width: 90ch;
	}
`;
