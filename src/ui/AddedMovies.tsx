import { useMovies } from '../context/useMovies';
import Movie from './Movie';

function AddedMovies() {
  const { watchList } = useMovies();
  return (
    <div>
      {watchList.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default AddedMovies;
