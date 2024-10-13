import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">Search</button>
      </form>
      <Toaster className={css.toaster} />
    </header>
  );
};

export default SearchBar;