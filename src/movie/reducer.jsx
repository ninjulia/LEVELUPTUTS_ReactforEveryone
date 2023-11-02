/* eslint-disable react-refresh/only-export-components */
import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from './actions';

const initialState = {
	movies: [],
	moviesLoaded: false,
	moviesLoadedAt: null,
	movie: {},
	movieLoaded: false,
	movieLoadedAt: null,
};

export default function (state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_MOVIES:
			return {
				...state,
				movies: data,
				moviesLoaded: true,
				moviesLoadedAt: new Date(),
			};
		case GET_MOVIE:
			return {
				...state,
				movie: data,
				movieLoaded: true,
				movieLoadedAt: new Date(),
			};
		case RESET_MOVIE:
			return {
				...state,
				movie: {},
				movieLoaded: false,
			};
		default:
			return state;
	}
}
