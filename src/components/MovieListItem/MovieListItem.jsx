import { NavLink, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import movieListItemStyle from './MovieListItem.module.css'

const MovieListItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li className={movieListItemStyle.item}>
      <NavLink className={movieListItemStyle.link} state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </NavLink>
    </li>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};