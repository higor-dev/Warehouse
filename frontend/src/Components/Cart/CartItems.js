import React from 'react';
import styles from './CartItems.module.css';

const CartItems = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <li className={styles.items}>
      <div className={styles.flex}>
        <span>{cartItem.productName}</span>
        <span>R${cartItem.sellPrice}</span>
      </div>
    </li>
  );
};

export default CartItems;
