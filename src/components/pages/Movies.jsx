import { fetchQuery } from 'components/Api/fetchData';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') return;
    const qetData = async () => {
      const response = await fetchQuery(query);
      setMovies(response.data.results);
    };
    qetData();
  }, [query]);

  const handlerFormSubmit = e => {
    e.preventDefault();

    if (input === query) {
      return;
    }
    setQuery(input);
    setMovies([]);
  };

  return (
    <main>
      <form onSubmit={handlerFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="May contain only letters, apostrophe, dash and spaces."
          required
          autoFocus
          placeholder="Search movies"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" aria-label="search button">
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <Box display="flex" flexDirection="column">
          <ul>
            {movies.map(({ id, original_title }) => (
              <li>
                <NavLink key={id} to={`${id}`}>
                  {original_title}
                </NavLink>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </main>
  );
};
