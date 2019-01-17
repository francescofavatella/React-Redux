import { createSelector } from "reselect";

const appSelector = state => state.appReducers;
// Basic selector
export const getAccumulator = (state, props) => {
  return state.accumulator;
};

// Using reselect
const postSelector = state => state.postReducers;
export const getPost = createSelector(postSelector, state => state.post);
