import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
//import { FilmList } from './FilmList/FilmList';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';
import { Movies } from './pages/Movies';
import { Box } from './Box/Box';
import { Cast } from './MovieDetails/Cast/Cast';
import { Reviews } from './MovieDetails/Reviews/Reviews';

const Link = styled(NavLink)`
  color: black;
  margin: 10px;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <>
      <Box as="header" pt={4} pb={4} borderBottom="normal">
        <Box as="nav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
