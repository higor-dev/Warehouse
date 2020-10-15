import React from 'react';
import styles from './CartItems.module.css';
import { connect } from 'react-redux';
import { removeCart } from '../../Actions/removeCart';
import { adjustQty } from '../../Actions/adjustQty';

const CartItems = ({ itemData, removeCart, adjustQty }) => {
  const [input, setInput] = React.useState(itemData.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData, e.target.value);
  };

  return (
    <li className={styles.items}>
      <div className={styles.exclude}>
        <h3 onClick={() => removeCart(itemData)}>X</h3>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.gap}>
          <h4 className={styles.errado} style={{ color: '#ccc' }}>
            Produto:
          </h4>
          <span>{itemData.productName}</span>
        </div>
        <div className={styles.gap}>
          <h4 className={styles.errado} style={{ color: '#ccc' }}>
            Preço:
          </h4>
          <span>R${itemData.sellPrice}</span>
        </div>
        <div className={styles.gap}>
          <h4 style={{ color: '#ccc' }}>Qtd:</h4>
          <input
            style={
              itemData.qty > itemData.quantity
                ? { borderBottom: '1px solid red' }
                : { borderBottom: '1px solid silver' }
            }
            value={input}
            onChange={onChangeHandler}
            className={styles.inputzinho}
            type="text"
          ></input>
        </div>
      </div>
    </li>
  );
};

export default connect(null, { removeCart, adjustQty })(CartItems);
