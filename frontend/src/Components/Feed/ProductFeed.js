import React from 'react';
import styles from './ProductFeed.module.css';
import Image from '../Helper/Image';

const ProductFeed = ({ produto, setModalPhoto, filter }) => {
  function handleClick() {
    setModalPhoto(produto);
  }

  return (
    <>
      <li onClick={handleClick} className={styles.product}>
        <Image src={produto.image} alt={produto.productName} />
        <div>
          <span className={styles.span}>
            {produto.quantity > 0 ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
          </span>
        </div>
        <section className={styles.descricao}>
          <h3>{produto.productName}</h3>
          <h3>Disponíveis: {produto.quantity}</h3>
          <h3>Preço de compra: R$: {produto.price}</h3>
        </section>
      </li>{' '}
    </>
  );
  // } else return null;
};

export default ProductFeed;
