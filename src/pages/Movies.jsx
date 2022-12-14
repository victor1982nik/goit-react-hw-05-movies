import { fetchQuery } from 'components/Api/fetchData';
import { Box } from 'components/Box/Box';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null || query === '') return;
    //console.log(query);
    const getFilmsByQuery = async () => {
      try {
        setIsLoading(true);
        const res = await fetchQuery(query);
        setMovies(res.data.results);
        //console.log(res.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilmsByQuery();
  }, [query]);

  const handlerFormSubmit = e => {
    e.preventDefault();
    const queryStr = e.target.elements.query.value;
    if (queryStr === '') {
      return;
    }
    setSearchParams({ query: queryStr });
    setMovies([]);
  };

  return (
    <main>
      <Box pt={3} pl={3}>
        <Form onSubmit={handlerFormSubmit}></Form>
        {isLoading && <Loader />}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </Box>
    </main>
  );
};

export default Movies;
