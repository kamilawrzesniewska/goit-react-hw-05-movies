import styles from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchMovieList = ({ movies }) => {
  const location = useLocation();

  if (!movies) return;

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li className={styles.item} key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

SearchMovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchMovieList;