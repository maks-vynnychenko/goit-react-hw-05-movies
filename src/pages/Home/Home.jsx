import MovieList from 'components/MovieList/MovieList';
import React, { useState, useEffect } from 'react';
import { getTrendMovie } from 'services/api';

import homeStyle from './Home.module.css'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendFilm = async () => {
      try {
        const data = await getTrendMovie();
        setMovies(data);
      } catch (error) {}
    };

    fetchTrendFilm();
  }, []);

  return (
    <main>
      <h1 className={homeStyle.title}>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;