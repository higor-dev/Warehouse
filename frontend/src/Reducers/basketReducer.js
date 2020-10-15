import {
  ADD_CART,
  REMOVE_CART,
  ADJ_QTY,
  LOAD_CART,
  ADD_PRODUCTS,
  EMPTY_CART,
  ADJUST_PRICE,
} from '../Actions/Types';

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item,
            )
          : [...state.cart, { ...item, qty: 1, sellingPrice: item.sellPrice }],
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ADJ_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item,
        ),
      };
    case ADJUST_PRICE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, sellingPrice: +action.payload.price }
            : item,
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case LOAD_CART:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
