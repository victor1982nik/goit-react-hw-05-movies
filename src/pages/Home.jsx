import { fetchTrendingMovies } from 'components/Api/fetchData';
import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendindFilms = async id => {
      try {
        setIsLoading(true);
        const res = await fetchTrendingMovies();
        setMovies(res.data.results);
        // console.log(res.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendindFilms();
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      {movies.length > 0 && (
        <>
          <Box as="h1">Trending today</Box>
          <MoviesList movies={movies} />
        </>
      )}
    </main>
  );
};

export default Home;
