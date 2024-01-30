import { useMovies } from '../context/useMovies';
import Movie from './Movie';

function SeachedMovies() {
  const { searchResult, isLoadingMovies } = useMovies();
  if (isLoadingMovies) return <div>Loading...</div>;

  return (
    <div>
      {searchResult?.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
    </div>
  );
}

export default SeachedMovies;
