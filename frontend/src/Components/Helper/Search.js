import React from 'react';
import styles from './Search.module.css';

const Search = ({ onChange }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <input
        className={styles.search}
        type="text"
        placeholder="Pesquisar..."
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
