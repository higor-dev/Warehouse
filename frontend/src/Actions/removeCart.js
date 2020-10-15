import { REMOVE_CART } from './Types';

export const removeCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CART,
      payload: {
        id: product.id,
      },
    });
  };
};
