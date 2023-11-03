// import { Context } from '../../netlify/functions/access';
// import { fetchMovies, fetchMovie } from './testAccess.js';
import { fetchMovies, fetchMovie } from '../../netlify/functions/access';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovies() {
	return async function (dispatch) {
		const movies = await fetchMovies();
		return dispatch({
			type: 'GET_MOVIES',
			data: movies.results,
		});
	};
}

export function getMovie(id) {
	return async function (dispatch) {
		const movieDetails = await fetchMovie(id);
		return dispatch({
			type: 'GET_MOVIE',
			data: movieDetails,
		});
	};
}

export function resetMovie() {
	return {
		type: 'RESET_MOVIE',
	};
}
