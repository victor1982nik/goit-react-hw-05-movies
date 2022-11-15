import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FilmList } from './FilmList/FilmList';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<FilmList />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={null} >
            <Route path="cast" element={<Movies />} />
            <Route path="reviews" element={<Movies />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
