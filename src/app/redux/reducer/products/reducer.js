import { initialState } from '@/app/redux/action/products/state';
import { actionType } from '@/app/redux/action/products/type';

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadProducts:
      state = {
        ...state,
        productsList: action.payload
      };
      return state;
    case actionType.loadProductsResetData:
      return initialState;
    default:
      return state;
  }
};

export default productsReducer;
