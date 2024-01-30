import { useContext } from 'react';
import { MoviesContext } from './MoviesContext';

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    console.error('MoviesContex was used outside of MovieContextProvider');
  }
  return context;
};
