import { ADD_PRODUCT_BASKET } from './Types';

export const addBasket = () => {
  return (dispatch) => {
    console.log('Adding to basket.');
    dispatch({
      type: ADD_PRODUCT_BASKET,
    });
  };
};
