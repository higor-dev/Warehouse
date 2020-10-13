import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './CartItems.module.css';

const CartItems = ({ cartItem, setQuantidade, setJSON }) => {
  const { cart, setCart } = React.useContext(UserContext);
  const [adicionar, setAdicionar] = React.useState(1);

  function removeCart(e) {
    e.preventDefault();
    setCart(cart.filter((product) => product !== cartItem));
  }

  React.useEffect(() => {
    setQuantidade(adicionar);
  }, [adicionar, setQuantidade]);

  React.useEffect(() => {
    setJSON((current) => [
      ...current,
      {
        productName: cartItem.productName,
        id: cartItem.id,
        quantity: adicionar,
      },
    ]);
  }, [setJSON, cartItem.productName, adicionar, cartItem.id]);

  return (
    <li className={styles.items}>
      <div className={styles.exclude}>
        <h3 onClick={removeCart}>X</h3>
      </div>
      <div className={styles.flex}>
        <span>{cartItem.productName}</span>
        <div className={styles.quantidade}>
          <button
            onClick={() => {
              setAdicionar(adicionar - 1);
            }}
          >
            -
          </button>
          {adicionar}

          <button
            onClick={() => {
              setAdicionar(adicionar + 1);
            }}
          >
            +
          </button>
        </div>
        <span>R${cartItem.sellPrice}</span>
      </div>
    </li>
  );
};

export default CartItems;
