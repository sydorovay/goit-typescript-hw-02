import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={css.loader}>
    <MagnifyingGlass
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="MagnifyingGlass-loading"
    />
  </div>
);

export default Loader;