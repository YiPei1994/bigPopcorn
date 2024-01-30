import { Movie, MovieDetail } from '../context/MoviesType';

const API_URL = 'http://www.omdbapi.com/';
const KEY = '29bb9f29';

export const getMovies = async (
  query: string,
): Promise<Movie[] | undefined> => {
  const res = await fetch(`${API_URL}?apikey=${KEY}&s=${query}`);

  if (!res.ok) {
    throw new Error('Something went wrong.');
  }
  const data = await res.json();
  const dataSearch = (await data.Search) as Movie[];
  return dataSearch;
};

export const getMovieById = async (
  id: string,
): Promise<MovieDetail | undefined> => {
  const res = await fetch(`${API_URL}?apikey=${KEY}&i=${id}`);
  if (!res.ok) {
    throw new Error('Couldnt find exact movie.');
  }
  const data = (await res.json()) as MovieDetail;

  return data;
};
