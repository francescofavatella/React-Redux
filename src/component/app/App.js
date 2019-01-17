import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  loadPost
} from "./actionCreators";
import { getAccumulator, getPost } from "./selectors";

const Post = ({ post }) => {
  return (
    <div>
      <div>id: {post.id}</div>
      <div>title: {post.title}</div>
    </div>
  );
};

class App extends React.Component {
  render() {
    const {
      accumulator,
      post,
      increment,
      decrement,
      incrementAsync,
      loadPost
    } = this.props;
    return (
      <div>
        <div>Accumulator: {accumulator}</div>
        <Post post={post} />
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
        <button onClick={incrementAsync}>Incrementa Asincrono</button>
        <button onClick={loadPost}>Leggi Post</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // Basic selector
  accumulator: getAccumulator(state.appReducers),

  // Using reselect
  post: getPost(state)
});

const mapDispatchToProps = {
  increment: () => increment(15),
  decrement: () => decrement(),

  // The async work thanks to redux-thunk
  incrementAsync: () => incrementAsync(),
  loadPost: () => loadPost(1)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
