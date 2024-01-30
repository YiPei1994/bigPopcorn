import { useMovies } from '../context/useMovies';
import AddedMovies from '../ui/AddedMovies';
import MovieDetail from '../ui/MovieDetail';
import SeachedMovies from '../ui/SeachedMovies';

import Header from './Header';

function Applayout() {
  const { movieId } = useMovies();
  return (
    <>
      <Header />
      <main className="flex">
        <SeachedMovies />
        <div>
          {movieId && <MovieDetail />}
          <AddedMovies />
        </div>
      </main>
    </>
  );
}

export default Applayout;
