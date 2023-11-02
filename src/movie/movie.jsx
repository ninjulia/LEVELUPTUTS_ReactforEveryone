import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

function Movie({ movieData }) {
	return (
		<Link to={`/${movieData.id}`}>
			<Poster
				src={movieData.poster_path ? `${POSTER_PATH}${movieData.poster_path}` : ''}
				alt={movieData.title}
			/>
		</Link>
	);
}

Movie.propTypes = {
	movieData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		poster_path: PropTypes.string.isRequired,
	}).isRequired,
};

export default Movie;

//styling should go in separate file
export const Poster = styled.img`
	box-shadow: 0 0 35px #000;
`;
