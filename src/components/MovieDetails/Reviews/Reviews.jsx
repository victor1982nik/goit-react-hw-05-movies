import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { fetchMovieReviewsById } from 'components/Api/fetchData';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    const getReviewstById = async id => {
      try {
        setIsLoading(true);
        const res = await fetchMovieReviewsById(Number(id));
        setReviews(res.data.results);
        //console.log(res.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewstById(id);
  }, [id]);

  return (
    <Box>
      {isLoading && <Loader />}
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => {
          return (
            <Box key={id} ml={5}>
              <Box fontWeight="bold">Author: {author}</Box>
              <p> {content}</p>
            </Box>
          );
        })}
      {reviews.length === 0 && (
        <Box>We don't have any reviews for this movie.</Box>
      )}
    </Box>
  );
}
