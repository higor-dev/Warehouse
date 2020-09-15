import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
      <img className={styles.img} src={photo.src} alt={photo.title} />
      <span className={styles.span}>
        {photo.peso > 0 ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
      </span>
      <div className={styles.descricao}>
        <h3>{photo.title}</h3>
        <h3>Disponíveis: {photo.peso}</h3>
        <h3>R$: {photo.idade}</h3>
      </div>
    </li>
  );
};

export default FeedPhotosItem;
