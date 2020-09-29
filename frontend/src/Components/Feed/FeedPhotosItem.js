import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';
// import { getProduct } from '../../api';
// import useFetch from '../../Hooks/useFetch';

const FeedPhotosItem = ({ produto, setModalPhoto, filter }) => {
  function handleClick() {
    setModalPhoto(produto);
  }
  // const { data, error, loading, request } = useFetch();

  // React.useEffect(() => {
  //   async function fetchPhotos() {
  //     const token = window.localStorage.getItem('token')
  //     const { url, options } = getProduct(1, token);
  //     const { json } = await request(url, options);
  //   }
  //   fetchPhotos();
  // }, [request]);

  // console.log(data)

  // if (data) {
  return (
    <>
      <li onClick={handleClick} className={styles.photo}>
        <Image src={produto.image} alt={produto.productName} />
        <div>
          <span className={styles.span}>
            {produto.quantity > 0 ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
          </span>
        </div>
        {/* </div> */}
        <section className={styles.descricao}>
          <h3>{produto.productName}</h3>
          <h3>Disponíveis: {produto.quantity}</h3>
          <h3>R$: {produto.price}</h3>
        </section>
      </li>{' '}
    </>
  );
  // } else return null;
};

export default FeedPhotosItem;
