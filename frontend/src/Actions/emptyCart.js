import { EMPTY_CART } from './Types';

export const emptyCart = () => {
  return (dispatch) => {
    console.log('Empty cart');
    dispatch({
      type: EMPTY_CART,
    });
  };
};
