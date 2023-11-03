//hide api access token
const token = import.meta.env.VITE_APP_API_READ_ACCESS_TOKEN;

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${token}`,
	},
};

export async function fetchMovies() {
	const res = await fetch(
		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
		options
	);
	const movies = await res.json();
	return movies;
}
