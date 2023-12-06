import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Poster = styled(motion.img)`
	box-shadow: 0 0 35px #000;
`;

//can use shorthand for CSS, but more verbose = more better, right?
export const MovieWrapper = styled(motion.div)`
	position: relative;
	padding-block-start: 50vh;
	background-image: url(${(props) => props.$backdrop});
	background-repeat: no-repeat;
	background-position: center bottom;
	background-size: cover;
`;

export const MovieInfo = styled.div`
	background-color: #fff;
	text-align: left;
	padding: 2rem 10%;
	display: flex;

	@media screen and (max-width: 576px) {
		flex-direction: column;
	}

	> div {
		margin-inline-start: 1.75rem;

		@media screen and (max-width: 576px) {
			margin-block-start: -3.75rem;
			margin-inline: auto;
		}
	}

	img {
		position: relative;
		top: -5rem;

		@media screen and (max-width: 576px) {
			margin: 0 auto;
		}
	}

	p {
		max-width: 90ch;
	}
`;

//movie thumbs are 154px / 231px
export const MovieGrid = styled(motion.div)`
	margin: 0 auto;
	max-width: 1200px;

	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(min(100%/2, max(154px, 100%/6)), 1fr));
	grid-row-gap: 1rem;
	grid-column-gap: min(0.5rem, 1rem);

	img {
		max-width: 100%;
		height: auto;
	}
`;
