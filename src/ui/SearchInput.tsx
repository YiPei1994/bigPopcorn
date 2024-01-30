import { FormEvent, useRef } from 'react';
import { useMovies } from '../context/useMovies';

function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null!);
  const { setSearchValue } = useMovies();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(searchRef.current?.value);
    setSearchValue(searchRef.current?.value);
    searchRef.current.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={searchRef} />
      <span>found 0 result </span>
    </form>
  );
}

export default SearchInput;
