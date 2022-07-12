import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
} from "../actions";

const INIT_STATE = {
  users: [],
  isLoading: false,
};
const userReducer = (state = INIT_STATE, action) => {
  console.log("action", action);
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return { ...state, isLoading: true };
    case FETCH_USERS_FULFILLED:
      console.log("FETCH_USERS_FULFILLED", action);
      return { ...state, isLoading: false, users: action.payload.data };
    case FETCH_USERS_REJECTED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
