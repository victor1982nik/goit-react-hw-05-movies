import { fetchTrendingMovies } from 'components/Api/fetchData';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(r => setMovies(r.data.results));
  }, []);

  //console.log(movies);

  return (
    <main>
      <Box display='flex' flexDirection='column'>
        {movies.map(({ id, original_title }) => (
          <NavLink key={id} to={`movies/${id}`}> 
            {original_title}
          </NavLink>
        ))}
      </Box>
    </main>
  );
};
