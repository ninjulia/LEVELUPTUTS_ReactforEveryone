import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//import components
import { Poster, MovieWrapper, MovieInfo } from './styles';

//animations
const variants = {
	initial: { opacity: 0, y: -100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -100 },
};

const posterVariants = {
	initial: { opacity: 0, x: -100 },
	animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
	exit: { opacity: 0, x: -100 },
};

export default function MovieDetail({ pageTitle }) {
	//get movie data from MovieList item
	const location = useLocation();
	const movie = location.state.movieData;
	const POSTER_PATH = location.state.posterURL;

	//update page title tag
	useEffect(() => {
		document.title = `${movie.title} | ${pageTitle}`;
	}, [movie.title, pageTitle]);

	const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

	return (
		<MovieWrapper
			$backdrop={movie.backdrop_path ? `${BACKDROP_PATH}${movie.backdrop_path}` : ''}
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit">
			<MovieInfo>
				<Poster
					src={movie.poster_path ? `${POSTER_PATH}${movie.poster_path}` : ''}
					alt={movie.title}
					variants={posterVariants}
					initial="initial"
					animate="animate"
					exit="exit"
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
