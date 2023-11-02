import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import logo from './assets/logo.svg';
import './App.css';
//import components
import MovieList from './movie/movieList';
import MovieDetail from './movie/movieDetail';
import Toggle from './toggle/Toggle';

const middleware = [logger, thunkMiddleware];

//set up store
const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

function App() {
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
					<Routes>
						<Route
							exact={true}
							path="/"
							element={<MovieList />}
						/>
						<Route
							path="/:id"
							element={<MovieDetail />}
						/>
					</Routes>
				</div>
				<footer>
					<p>
						Movie images and data provided by
						<a href="https://www.themoviedb.org/">
							<img
								src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
								alt="the Movie Database"
							/>
						</a>
					</p>
					<p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
				</footer>
			</Router>
		</Provider>
	);
}

export default App;