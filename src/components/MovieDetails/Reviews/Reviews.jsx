import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { fetchMovieReviewsById } from 'components/fetchData';

//const BASE_PICTURE_PATH = 'https://image.tmdb.org/t/p/w500';

export const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMovieReviewsById(id).then(res => setReviews(res.data.results));
  }, [id]);

  console.log(reviews);

  return (
    <Box>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => {
          return (
            <Box key={id}>
              <p>Author: {author}</p>
              <p> {content}</p>
            </Box>
          );
        })}
      hello
    </Box>
  );
};
