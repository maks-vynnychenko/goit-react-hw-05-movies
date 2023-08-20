import NotFound from 'components/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'services/api';

import reviewsStyle from './Reviews.module.css';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviewsById(moviesId).then(data => {
      if (data.length === 0) {
        return;
      }
      setReviews(data);
    });
  }, [moviesId]);

  return (
    <>
      {reviews.length > 0 && (
        <ul className={reviewsStyle.list}>
          {reviews.map(inf => {
            return (
              <li key={inf.id}>
                <h3>Author: {inf.author}</h3>
                <p>{inf.content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {reviews.length === 0 && (
        <NotFound message={'We don`t have any reviews for this movie'} />
      )}
    </>
  );
};

export default Reviews;