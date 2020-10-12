import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './Cart.module.css';
import CartItems from './CartItems';

const Cart = () => {
  const { cart, setCart } = React.useContext(UserContext);
  const { pathname } = useLocation();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.sellPrice, 0);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(cart);
  if (cart.length === 0) {
    return (
      <div className={styles.vazio}>
        <h1 className={styles.title}>Seu carrinho está vazio! Volte!</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Seu carrinho</h1>
      </div>
      <ul>
        {cart.map((cartItem) => {
          return <CartItems key={cartItem.id} cartItem={cartItem} />;
        })}
      </ul>
      <h2 className={styles.subtotal}>Subtotal: R${totalPrice}</h2>
    </div>
  );
};

export default Cart;
