import { ADJ_QTY } from './Types';

export const adjustQty = (product, value) => {
  return (dispatch) => {
    dispatch({
      type: ADJ_QTY,
      payload: {
        id: product.id,
        qty: value,
      },
    });
  };
};
