import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = React.lazy(() => import('../components/Cast/Cast'));
const Reviews = React.lazy(() => import('../components/Reviews/Reviews'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;


