import { INCREMENT, DECREMENT, LOAD_POST } from "./actionTypes";

const appReducersInitialState = { accumulator: 0 };

export const appReducers = (state = appReducersInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        accumulator: state.accumulator + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        accumulator: state.accumulator - 1
      };
    default:
      return state;
  }
};
const postReducersInitialState = { post: {} };
export const postReducers = (state = postReducersInitialState, action) => {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
};

export default appReducers;
