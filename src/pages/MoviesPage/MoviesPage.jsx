import styles from './MoviesPage.module.css';
import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'utils/apiSupport';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';


const MoviesPage = () => {
  const { container } = styles;

  const params = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryValue = form.elements.query.value;
    if (queryValue === '') {
      return setErrorMessage('The search field cannot be empty');
    }
    setSearchParams({ query: queryValue });
    setErrorMessage('');
    form.reset();
  };

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query, setSearchedMovies).catch(console.error);
    }
  }, [query]);

  return (
    <main className={container}>
      {params.movieId ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <SearchBar onSubmit={onSubmit} />
          {errorMessage ? (
            <div className="error">{errorMessage}</div>
          ) : (
            <MovieList movies={searchedMovies} />
          )}
        </>
      )}
    </main>
  );
};

export default MoviesPage;