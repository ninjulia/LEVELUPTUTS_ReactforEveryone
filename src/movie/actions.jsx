import { fetchMovies } from '../../netlify/functions/access';

export const GET_MOVIES = 'GET_MOVIES';
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

export function resetMovie() {
	return {
		type: 'RESET_MOVIE',
	};
}
