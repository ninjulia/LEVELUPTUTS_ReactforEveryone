# Work for Level Up Tutorials' Mastering React Course

This project was built as a solution to [Part 1: React 16 For Everyone](https://levelup.video/tutorials/react-16-for-everyone/) and [Part 2: Redux and React](https://levelup.video/tutorials/redux-and-react-for-everyone/). This project is part of their [Mastering React Training Course](https://levelup.video/paths/mastering-react). The tutorial was recorded several years ago using Reactv16, currently, React is on v18. I have researched modern methods and deviated from the tutorial where appropriate. See the Project section for more details.

## Installing / Getting started

The Movie Database (TMBD) API Key is defined in Netlify Environmental Variable. You MUST use Netlify to access the project in development. Using the standard `npm run dev` command will throw errors since Vite doesn't have access to the variable.

```shell
npx netlify dev # spins up Server on http://localhost:8888
```

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project](#project)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [API Attribution](#api-attribution)

## Overview

### The challenge

Build a React web application using provided CSS. Users should be able to:

- See a collection of the latest movies from [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Click on a movie for more details
- Visit a unique url for each movie
- Limit API calls by leveraging their local storage

TODO:

- Search for movie by methods available in the API call
- See a list of movies with pagination
- Click on a movie for more details

### Screenshot

![screenshot](./screenshot.png?raw=true)

### Links

- Solution URL: [https://github.com/ninjulia/LEVELUPTUTS_ReactforEveryone/](https://github.com/ninjulia/LEVELUPTUTS_ReactforEveryone/)
- Live Site URL: [https://superb-chimera-8a0809.netlify.app](https://superb-chimera-8a0809.netlify.app/)
- Hosting via Netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/4429c8ed-bfa4-48b6-9504-5198908d0d04/deploy-status)](https://app.netlify.com/sites/superb-chimera-8a0809/deploys)

## My process

### Built with

- vite
- netlify

### Project

As of late 2023, React is on vs 18. The tutorial was recorded on React 16, using create-react-app. A look at FreeCodeCamp's [How to Build a React App – A Walkthrough of the Many Different Ways](https://www.freecodecamp.org/news/how-to-build-a-react-app-different-ways) directed me to use [Vite.js](https://vitejs.dev/).

Notable deviations from the Tutorial include:

- leveraging recommended react hooks such as `useEffect()`
- passing MovieDetails as props to avoid another API call
- set page title dynamically **TODO: set in state**
- **TODO: replaced outdated react-overdrive with another route-based animation toolset**

### Useful resources

- Vite documentation [https://vitejs.dev/](https://vitejs.dev/)
- Project Walk-through [https://www.youtube.com/watch?v=DH991Dzb9iE](https://www.youtube.com/watch?v=DH991Dzb9iE)
- Fetch API help [JavaScript Fetch API](https://www.youtube.com/watch?v=AGWwa25ZlRY) by [James Q Quick](https://www.youtube.com/@JamesQQuick)
- Help transitioning react-router-dom to React18 [React Routing to New Page with React 18](https://medium.com/@lalafang33/react-routing-to-new-page-v18-aa293ccb716f) by [Lalafang](https://medium.com/@lalafang33).
- Passing props from React Router Link components [How to Pass Props Through React Router's Link Component](https://ui.dev/react-router-pass-props-to-link)
- Help hiding API key [FreeCodeCamp's How to Hide API Keys in Frontend Apps using Netlify Functions](https://www.freecodecamp.org/news/hide-api-keys-in-frontend-apps-using-netlify-functions/)

## Author

- Website - [Julia](https://www.becausejulia.com)

## API Attribution

- Movie images and data provided by [TMDB API](https://www.themoviedb.org/). This product uses the but is not endorsed or certified by TMDB.
- [docs](https://developer.themoviedb.org/docs)

### NOTE

STILL EVALUATING react-overdrive not compatible with React18, used AutoAnimate instead

https://www.freecodecamp.org/news/animate-react-apps/

https://auto-animate.formkit.com/

maybe this? https://css-tricks.com/animating-between-views-in-react/

https://reactnative.dev/docs/animations?language=javascript

or this https://github.com/aholachek/react-flip-toolkit#route-based-animations-with-react-router

https://github.com/aholachek/react-flip-toolkit-router-example
