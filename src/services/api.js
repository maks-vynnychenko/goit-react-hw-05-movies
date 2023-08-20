import axios from 'axios';

const API_KEY = '201a200521ee100a5b50e6d6c06ca200';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendMovie = async () => {
  const trendMovie = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return trendMovie.data.results;
};

export const searchMovieByQuery = async query => {
  const movies = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return movies.data.results;
};

export const getMovieDetailsById = async moviesId => {
  const movieDetails = await axios.get(
    `${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}`
  );

  return movieDetails.data;
};

export const getMovieCreditsById = async moviesId => {
  const movieCredits = await axios.get(
    `${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}`
  );

  return movieCredits.data.cast;
};

export const getMovieReviewsById = async moviesId => {
  const movieReviews = await axios.get(
    `${BASE_URL}/movie/${moviesId}/reviews?api_key=${API_KEY}`
  );

  return movieReviews.data.results;
};
