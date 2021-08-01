import { Component } from "react";

import styles from "./Posts.module.css";

import Subtitle from "../Subtitle/Subtitle";
import Post from "../Post/Post";

class Posts extends Component {
  state = {};

  render() {
    return (
      <>
        <Subtitle message="List of posts:" />
        <ul className={styles.posts__list}>
          {this.props.posts.length ? (
            this.props.posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  removePost={this.props.removePost}
                />
              );
            })
          ) : (
            <p className={styles.emptyPostsList}>
              Here are no posts. Write the first post.
            </p>
          )}
        </ul>
      </>
    );
  }
}

export default Posts;
