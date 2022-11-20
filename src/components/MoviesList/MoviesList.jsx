import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box display="flex" flexDirection="column">
      <ul>
        {movies.map(({ id, original_title, name }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {original_title || name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Box>
  );
};
