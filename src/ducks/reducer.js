import axios from 'axios';
const initialState = {
  cart: ''
  // firstName: '',
  // ageGrouping: ''
};
//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// ///////////////////////
// const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
// const UPDATE_AGE_GROUPING = 'UPDATE_AGE_GROUPING';
// const SUBMIT_APPT= 'SUBMIT_APPT';

//REDUCER
export function reducer(state = initialState, action) {
  switch (action.type) {
    //////////// SHOPPING CART ////////////
    case ADD_TO_CART:
      return Object.assign({}, state, {
        shoppingCart: [...state.cart, action.payload]
      });

    case REMOVE_FROM_CART:
      let newArray = state.cart.slice();
      newArray.splice(action.index, 1);
      return Object.assign({}, { cart: newArray });
    /////////////////////////////////////////////////
    // case UPDATE_FIRST_NAME:
    //   return Object.assign({}, state, { firstName: action.payload });

    // case UPDATE_AGE_GROUPING:
    //   return Object.assign({}, state, { ageGrouping: action.payload });
    default:
      return state;
  }
}

//ACTION CREATORS
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

export function deleteFromCart(productIndex) {
  return {
    type: REMOVE_FROM_CART,
    payload: productIndex
  };
}

export default reducer;

// export function updateFirstName(firstName) {
//   return {
//     type: UPDATE_FIRST_NAME,
//     payload: firstName
//   };
// }
// export function updateLastName(lastName) {
//   return {
//     type: UPDATE_LAST_NAME,
//     payload: lastName
//   };
// }
