import { ADJUST_PRICE } from './Types';

export const adjustPrice = (product, value) => {
  return (dispatch) => {
    dispatch({
      type: ADJUST_PRICE,
      payload: {
        id: product.id,
        price: +value,
      },
    });
  };
};
