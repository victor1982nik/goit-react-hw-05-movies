import { fetchTrendingMovies } from 'components/Api/fetchData';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(r => setMovies(r.data.results));
  }, []);

  console.log(movies);

  return (
    <main>
      <div>
        {movies.map(({ id, original_title }) => (
          <NavLink key={id} to={id}>
            {original_title}
          </NavLink>
        ))}
      </div>
    </main>
  );
};
