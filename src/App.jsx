import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
//import logos, styling
import logo from './assets/logo.svg';
import './App.css';
//import components
import MovieList from './movie/movieList';
import MovieDetail from './movie/movieDetail';
import Toggle from './toggle/Toggle';

//verbose logging on dev
let middleware;
process.env.NODE_ENV === 'development' ? (middleware = [logger, thunkMiddleware]) : (middleware = [thunkMiddleware]);

//set up store
const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

function App() {
	const [pageTitle, setPageTitle] = useState('Level Up Movie Database | A way to learn REACT');

	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<header className="App-header">
						<Link to="/">
							<img
								src={logo}
								className="App-logo"
								alt="Level Up Movie Database"
							/>
						</Link>
					</header>
					<Toggle />
					<AnimatePresence mode="wait">
						<Routes>
							<Route
								exact={true}
								path="/"
								element={<MovieList pageTitle={pageTitle} />}
							/>
							<Route
								path="/:id"
								element={<MovieDetail pageTitle={pageTitle} />}
							/>
						</Routes>
					</AnimatePresence>
				</div>
				<footer>
					<div className="wrapper">
						<p>
							Movie images and data provided by&nbsp;&nbsp;
							<a
								href="https://www.themoviedb.org/"
								title="The Movie Database website">
								<img
									src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
									alt="the Movie Database"
								/>
							</a>
						</p>
						<p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
						<p>
							Coded by&nbsp;
							<a
								href="https://github.com/ninjulia/"
								title="Julia's Github">
								Julia
							</a>
							&nbsp;as a project to learn React, React-Router and animations via Level Up Tutorials. Read more about the
							process&nbsp;
							<a
								href="https://github.com/ninjulia/LEVELUPTUTS_ReactforEveryone/"
								title="project github repository">
								at the github repository
							</a>
							.
						</p>
					</div>
				</footer>
			</Router>
		</Provider>
	);
}

export default App;
