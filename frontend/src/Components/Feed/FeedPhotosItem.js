import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';
import { getProduct } from '../../api';
import useFetch from '../../Hooks/useFetch';

const FeedPhotosItem = ({ photo, setModalPhoto, filter }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const token = window.localStorage.getItem('token')
      const { url, options } = getProduct(1, token);
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  console.log(data)


  if (data) {
    return (
      <>
        <div><img src={`data:image/png;base64, ${data.image}`} alt="xesque" /></div>
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
        </li> </>

    );
  } else return null;
};

export default FeedPhotosItem;
