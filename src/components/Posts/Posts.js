import { Component } from "react";

import styles from "./Posts.module.css";

import Subtitle from "../Subtitle/Subtitle";
import Post from "../Post/Post";

class Posts extends Component {
  render() {
    const posts = this.props.posts;

    return (
      <>
        <Subtitle message="List of posts:" />
        <ul className={styles.postsList}>
          {posts.length ? (
            posts.map((post) => {
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
