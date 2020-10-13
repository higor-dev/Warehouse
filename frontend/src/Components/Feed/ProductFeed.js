import React from 'react';
import styles from './ProductFeed.module.css';
import Image from '../Helper/Image';
import { connect } from 'react-redux';
import { addBasket } from '../../Actions/addAction';

const ProductFeed = ({ produto, setModalPhoto, addBasket }) => {
  function handleClick() {
    setModalPhoto(produto);
  }

  return (
    <>
      <li className={styles.product}>
        <Image
          onClick={handleClick}
          src={produto.image}
          alt={produto.productName}
        />
        <div>
          <span className={styles.span}>
            {produto.quantity > 0 ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
          </span>
        </div>
        <section className={styles.descricao}>
          <h3>{produto.productName}</h3>
          <h3>Disponíveis: {produto.quantity}</h3>
          <h3>
            Preço para venda: R$:{' '}
            {Math.abs((Math.round(produto.sellPrice * 100) / 100).toFixed(2))}
          </h3>
          <button onClick={addBasket}>Adicionar ao carrinho</button>
        </section>
      </li>{' '}
    </>
  );
  // } else return null;
};

export default connect(null, { addBasket })(ProductFeed);
