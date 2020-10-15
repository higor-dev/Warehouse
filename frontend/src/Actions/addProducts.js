import { ADD_PRODUCTS } from './Types';

export const addProducts = (products) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCTS,
      payload: products,
    });
  };
};
