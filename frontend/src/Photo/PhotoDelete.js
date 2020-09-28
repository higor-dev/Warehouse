import React from 'react';
import { deleteProduct } from '../api';
import useFetch from '../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = deleteProduct(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Excluindo...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Excluir produto
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
