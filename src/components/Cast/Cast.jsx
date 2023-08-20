import NotFound from 'components/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from 'services/api';

import castStyle from './Cast.module.css'

const Cast = () => {
  const { moviesId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCreditsById(moviesId).then(data => {
      if (data.length === 0) {
        return;
      }
      setCredits(data);
    });
  }, [moviesId]);

  return (
    <>
      {credits.length > 0 && (
        <ul className={castStyle.list}>
          {credits.map(inf => {
            return (
              <li key={inf.id}>
                <img
                  src={
                    inf.profile_path
                      ? `https://image.tmdb.org/t/p/w200${inf.profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/200px-No-image-available.jpg`
                  }
                  alt=""
                />
                <p>Name: {inf.name}</p>
                <p>Character: {inf.character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {credits.length === 0 && (
        <NotFound message={'We don`t have any cast for this movie'} />
      )}
    </>
  );
};

export default Cast;