import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './Cart.module.css';
import CartItems from './CartItems';

const Cart = () => {
  const { cart } = React.useContext(UserContext);
  const { pathname } = useLocation();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.sellPrice, 0);
  const [quantidade, setQuantidade] = React.useState();
  const [json, setJSON] = React.useState([]);
  console.log(json);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          return (
            <CartItems
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              setJSON={setJSON}
              key={cartItem.id}
              cartItem={cartItem}
            />
          );
        })}
      </ul>
      <h2 className={styles.subtotal}>Total: R${totalPrice}</h2>
      <button>Sell</button>
    </div>
  );
};

export default Cart;
