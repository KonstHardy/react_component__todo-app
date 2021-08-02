import { Component } from "react";

import styles from "./App.module.css";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

class App extends Component {
  state = {
    posts: [],
  };

  addPost = (newPost) => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.concat(newPost),
      };
    });
  };

  removePost = (id) => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter((post) => post.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appWrapper}>
          <h1 className={styles.appTitle}>TODO App</h1>
          <Form addPost={this.addPost} />
          <Posts posts={this.state.posts} removePost={this.removePost} />
        </div>
      </div>
    );
  }
}

export default App;
