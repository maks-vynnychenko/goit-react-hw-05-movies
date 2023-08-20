import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import movieDetailsPageStyle from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({ data, backLink }) => {
  const location = useLocation();
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;

  return (
    <div>
      <div>
        <NavLink className={movieDetailsPageStyle.btn} to={backLink}>
          Go Back
        </NavLink>
      </div>

      <div className={movieDetailsPageStyle.container}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://www.tgv.com.my/assets/images/404/movie-poster.jpg}`
          }
          alt=""
        />

        <div className={movieDetailsPageStyle.about}>
          <div>
            <h1>{`${title} (${release_date.slice(0, 4)})`}</h1>
            <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>
      <div className={movieDetailsPageStyle.information}>
        <h3>Addictional Information</h3>
        <ul className={movieDetailsPageStyle.infList}>
          <li>
            <NavLink
              className={movieDetailsPageStyle.navLink}
              state={location.state}
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink state={location.state} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  backLink: PropTypes.object,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};