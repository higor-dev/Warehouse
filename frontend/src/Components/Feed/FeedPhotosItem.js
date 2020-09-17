import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
      <div
        style={{
          background: `url('${photo.src}') no-repeat center center`,
          backgroundSize: 'cover',
          display: 'block',
          height: '18.125rem',
          width: '18.125rem',
          objectFit: 'fill',
          borderRadius: '4px',
        }}
        className={styles.container}
      >
        {/* <img className={styles.img} src={photo.src} alt={photo.title} /> */}
        <span className={styles.span}>
          {photo.peso > 0 ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
        </span>
      </div>
      <div className={styles.descricao}>
        <h3>{photo.title}</h3>
        <h3>Disponíveis: {photo.peso}</h3>
        <h3>R$: {photo.idade}</h3>
      </div>
    </li>
  );
};

export default FeedPhotosItem;
