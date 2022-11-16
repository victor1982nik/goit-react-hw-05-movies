import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
//import { FilmList } from './FilmList/FilmList';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductsDetails';
import { Movies } from './pages/Movies';

const Link = styled(NavLink)`
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
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
