import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'components/Api/fetchData';
import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieDetails/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const getFilmById = async id => {
      try {
        setIsLoading(true);
        const res = await fetchMovieById(id);
        setMovie(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilmById(id);
  }, [id]);

  // debugger;
  return (
    <main>
      {isLoading && <Loader />}
      {movie && (
        <Box>
          <MovieCard movie={movie} />
          <Box display="flex" flexDirection="column">
            <p>Additional information</p>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </Box>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </Box>
      )}
    </main>
  );
};

export default MovieDetails;
