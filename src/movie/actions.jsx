export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

// import updated movies list
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${import.meta.env.VITE_APP_API_READ_ACCESS_TOKEN}`,
	},
};

export function getMovies() {
	return async function (dispatch) {
		const res = await fetch(
			'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
			options
		);
		const movies = await res.json();
		return dispatch({
			type: 'GET_MOVIES',
			data: movies.results,
		});
	};
}

export function getMovie(id) {
	return async function (dispatch) {
		const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
		const movieDetails = await res.json();
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
