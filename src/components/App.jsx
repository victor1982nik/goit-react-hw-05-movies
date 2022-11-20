import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));
//import { Home } from '../pages/Home';
//import { MovieDetails } from '../pages/MovieDetails';
//import { Movies } from '../pages/Movies';
//import { Cast } from './MovieDetails/Cast/Cast';
//import { Reviews } from './MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
