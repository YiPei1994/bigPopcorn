import { type Movie, type MovieDetail } from '../context/MoviesType';
import { useMovies } from '../context/useMovies';

const MovieDetail = () => {
  const { movieDetail, isLoadingMovie, setWatchList, watchList } = useMovies();

  if (isLoadingMovie) return;
  const {
    Title: title,
    Year: year,
    Plot: plot,
    Poster: poster,
    Runtime: time,
    imdbRating: rating,
    Director: director,
    Genre: genre,
    Actors: actors,
    imdbID: id,
    Type: type,
  } = movieDetail!;
  function handleAddMovie() {
    const movie: Movie = {
      Title: title,
      Year: year,
      Poster: poster,
      Type: type,
      imdbID: id,
    };
    setWatchList([...watchList, movie]);
  }
  return (
    <div>
      <div>
        <div>
          <img src={poster} alt={title} />
        </div>
        <div>
          <h2>{title} </h2>
          <p>
            {year}, <span>{time} </span>{' '}
          </p>
          <p>{genre} </p>
          <p>{rating} </p>
        </div>
      </div>
      <button onClick={handleAddMovie}>Add to Watch list</button>
      <div>
        <p>{plot} </p>
        <p>Starring {actors} </p>
        <p>Directed by {director} </p>
      </div>
    </div>
  );
};
export default MovieDetail;
