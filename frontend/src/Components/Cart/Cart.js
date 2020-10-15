import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Cart.module.css';
import { connect } from 'react-redux';
import CartItems from './CartItems';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { sellProduct } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { emptyCart } from '../../Actions/emptyCart';
import Loading from '../Helper/Loading';

const Cart = ({ basketProps, emptyCart }) => {
  const { pathname } = useLocation();
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);
  const parcelas = useForm();
  const { request, loading } = useFetch();

  console.log(basketProps.cart);

  React.useEffect(() => {
    let items = 0;
    let price = 0;

    basketProps.cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.sellPrice;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [basketProps.cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleSelling() {
    basketProps.cart.map((item) => {
      const oi = JSON.stringify({
        id: item.id,
        productName: item.productName,
        quantity: item.qty,
        price: Number(item.sellPrice),
        type: item.type,
        companyId: 1,
        image: item.image,
        isApportioned: Number(`${+parcelas.value === 1 ? 0 : 1}`),
        portion: +parcelas.value,
      });
      const token = window.localStorage.getItem('token');
      const { url, options } = sellProduct(oi, token);
      request(url, options);
      emptyCart();
    });
  }

  if (basketProps.cart.length === 0) {
    return (
      <div className={styles.vazio}>
        <h1 className={styles.title}>Seu carrinho está vazio! Volte!</h1>
      </div>
    );
  }

  if (loading) return <Loading />;
  return (
    <div className={`${styles.divisor} container`}>
      <div className={styles.header}>
        <h1>Seu carrinho</h1>
      </div>
      <ul>
        {basketProps.cart.map((item) => {
          return <CartItems key={item.id} itemData={item} />;
        })}
      </ul>
      <Input label="Parcelar" type="text" {...parcelas} />
      <h2 className={styles.subtotal}>
        Total: R${parcelas.value ? totalPrice / +parcelas.value : totalPrice}
      </h2>
      {loading ? (
        <button className={styles.button} disabled>
          Carregando...
        </button>
      ) : (
        <button className={styles.button} onClick={handleSelling}>
          Vender
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basketProps: state.basketState,
  };
};

export default connect(mapStateToProps, { emptyCart })(Cart);
