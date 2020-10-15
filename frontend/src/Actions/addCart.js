import { ADD_CART } from './Types';

export const addCart = (product) => {
  return (dispatch) => {
    console.log('adicionado');
    dispatch({
      type: ADD_CART,
      payload: {
        id: product.id,
      },
    });
  };
};
