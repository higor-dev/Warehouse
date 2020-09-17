import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
      <Image src={photo.src} alt={photo.title} />
      <div>
        <span className={styles.span}>
          {photo.peso > 0 ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
        </span>
      </div>
      {/* </div> */}
      <section className={styles.descricao}>
        <h3>{photo.title}</h3>
        <h3>Disponíveis: {photo.peso}</h3>
        <h3>R$: {photo.idade}</h3>
      </section>
    </li>
  );
};

export default FeedPhotosItem;
