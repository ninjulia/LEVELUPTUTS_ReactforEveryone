import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//import components
import { Poster, MovieWrapper, MovieInfo } from './styles';

export default function MovieDetail({ pageTitle }) {
	//get movie data from MovieList item
	const location = useLocation();
	const movie = location.state.movieData;
	const POSTER_PATH = location.state.posterURL;

	//update page title tag
	const [newPageTitle, setNewPageTitle] = useState(`${pageTitle}`);

	useEffect(() => {
		setNewPageTitle(`${movie.title} | ${pageTitle}`);
		document.title = newPageTitle;
	}, [movie.title, newPageTitle]);

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
