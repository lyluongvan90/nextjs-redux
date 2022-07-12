import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/CounterAction";

const INIT_STATE = {
  value: 0,
};
const counterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};

export default counterReducer;
