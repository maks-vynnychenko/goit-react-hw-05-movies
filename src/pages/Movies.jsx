import MovieList from 'components/MovieList/MovieList';
import NotFound from 'components/NotFound/NotFound';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByQuery } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const hendleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.children.search.value;
    setSearchParams({
      query: searchValue,
    });
  };

  useEffect(() => {
    const searchMovie = async () => {
      if (!searchQuery) {
        return;
      }

      try {
        const data = await searchMovieByQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovie();
  }, [searchQuery]);

  return (
    <main>
      <SearchBar onSubmit={hendleSubmit}></SearchBar>

      {movies.length > 0 && <MovieList movies={movies} />}
      {searchQuery && movies.length === 0 && (
        <NotFound message={'No movie found with your request'} />
      )}
    </main>
  );
};

export default Movies;