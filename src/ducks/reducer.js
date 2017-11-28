import axios from 'axios';
const initialState = {
  cart: '',
  firstName: '',
  lastName: '',
  ageGrouping: ''
};
//ACTION TYPES
// const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
///////////////////////
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_AGE_GROUPING = 'UPDATE_AGE_GROUPING';
// const SUBMIT_APPT= 'SUBMIT_APPT';

//REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return Object.assign({}, state, { firstName: action.payload });
    case UPDATE_LAST_NAME:
      return Object.assign({}, state, { lastName: action.payload });
    case UPDATE_AGE_GROUPING:
      return Object.assign({}, state, { ageGrouping: action.payload });
    default:
      return state;
  }
}

//ACTION CREATORS
export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRST_NAME,
    payload: firstName
  };
}
export function updateLastName(lastName) {
  return {
    type: UPDATE_LAST_NAME,
    payload: lastName
  };
}
export function updateAgeGrouping(ageGrouping) {
  return {
    type: UPDATE_AGE_GROUPING,
    payload: ageGrouping
  };
}
// export function submitAppt(){
//   return{
//     type: SUBMIT_APPT,
//     payload:
//   }
// }

export default reducer;
