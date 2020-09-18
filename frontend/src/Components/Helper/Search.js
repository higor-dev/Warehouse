import React from 'react';
import styles from './Search.module.css';

const Search = ({ onChange }) => {
  return (
    <div className={`${styles.wrapper} mainContainer`}>
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
