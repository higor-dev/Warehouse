import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../Actions/Types';

const initialState = {
  basketNumbers: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers + 1,
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
