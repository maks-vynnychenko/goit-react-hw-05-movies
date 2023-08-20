import PropTypes from 'prop-types';

import notFoundStyle from './NotFound.module.css'

const NotFound = ({ message }) => {
  return <p className={notFoundStyle.text}>{message}</p>;
};
export default NotFound;

NotFound.propTypes = {
  message: PropTypes.string,
};