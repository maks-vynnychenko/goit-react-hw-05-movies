import PropTypes from 'prop-types';

import searchBarStyle from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={searchBarStyle.form}>
      <input
        type="text"
        name="search"
        required
        value={query}
        onChange={onChange}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};