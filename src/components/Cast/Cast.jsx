import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'utils/apiSupport';
import Loader from '../Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const { cast } = fetchMovieCast(movieId);

  if (!cast) return <Loader />;

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              {actor.profile_path === null ? (
                <p
                  style={{
                    fontSize: '80px',
                    margin: '0',
                  }}
                >
                  &#10068;
                </p>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={`${actor.name}`}
                  width="90"
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;