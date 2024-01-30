import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useState } from 'react';
import { getMovieById, getMovies } from '../services/apiMovies';
import { Movie, MovieDetail } from './MoviesType';

type MoviesContextValue = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchResult: Movie[];
  watchList: Movie[];
  isLoadingMovies: boolean;
  movieId: string;
  setMovieId: (id: string) => void;
  isLoadingMovie: boolean;
  movieDetail: MovieDetail | undefined;
  setWatchList: React.Dispatch<React.SetStateAction<Movie[]>>;
};

type MoviesContextProps = {
  children: ReactNode;
};

export const MoviesContext = createContext({} as MoviesContextValue);

export const MoviesContextProvider = ({ children }: MoviesContextProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [movieId, setMovieId] = useState('');
  const [watchList, setWatchList] = useState<Movie[]>([]);

  // fetching
  const { data: searchResult = [], isLoading: isLoadingMovies } = useQuery<
    Movie[] | undefined
  >({
    queryKey: ['search', searchValue],
    queryFn: () => getMovies(searchValue),
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  const { data: movieDetail, isLoading: isLoadingMovie } = useQuery<
    MovieDetail | undefined
  >({
    queryKey: ['movieDetail', movieId],
    queryFn: () => getMovieById(movieId),
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  return (
    <MoviesContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchResult,
        isLoadingMovies,
        movieId,
        setMovieId,
        isLoadingMovie,
        movieDetail,
        watchList,
        setWatchList,
      }}
    >
      {children}{' '}
    </MoviesContext.Provider>
  );
};
