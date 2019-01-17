import axios from "axios";
import { INCREMENT, DECREMENT, LOAD_POST } from "./actionTypes";

export const increment = (payload = 10) => ({
  type: INCREMENT,
  payload
});
export const decrement = payload => ({
  type: DECREMENT,
  payload
});

export const incrementAsync = payload => {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment(payload));
    }, 1000);
  };
};

export const setPost = payload => ({
  type: LOAD_POST,
  payload
});

export const loadPost = payload => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + payload)
      .then(function(response) {
        dispatch(setPost(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
