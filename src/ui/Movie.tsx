import { type Movie } from '../context/MoviesType';
import { useMovies } from '../context/useMovies';

type MovieProps = {
  movie: Movie;
};

const Movie = ({ movie }: MovieProps) => {
  const { setMovieId } = useMovies();

  const { Title: title, Type: type, Poster: poster, imdbID: id } = movie;
  return (
    <div onClick={() => setMovieId(id)}>
      <img src={poster} alt={title} />
      <div>
        <h4> {title}</h4>
        <p> {type}</p>
      </div>
    </div>
  );
};
export default Movie;
