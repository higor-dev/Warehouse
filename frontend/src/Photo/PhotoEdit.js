import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoEdit.module.css';

const PhotoEdit = ({ id }) => {
  return (
    <>
      <button className={styles.edit}>
        <Link to={`/produto/${id}/editar`}>Editar</Link>
      </button>
    </>
  );
};

export default PhotoEdit;
