import { LOAD_CART } from './Types';

export const adjustQty = (product) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_CART,
      payload: product,
    });
  };
};
