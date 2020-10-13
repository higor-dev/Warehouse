import { GET_NUMBERS_BASKET } from './Types';

export const getNumbers = () => {
  return (dispatch) => {
    console.log('Getting to basket.');
    dispatch({
      type: GET_NUMBERS_BASKET,
    });
  };
};
