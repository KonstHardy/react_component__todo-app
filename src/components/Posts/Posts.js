import { Component } from "react";

import "./Posts.css";

import Post from "../Post/Post";

class Posts extends Component {
  state = {};

  render() {
    return (
      <>
        <h2 className="posts__subtitle subtitle">List of posts:</h2>

        <ul className="posts__list list">
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
            <p className="emptyPostsList">
              Here are no comments. Write the first post.
            </p>
          )}
        </ul>
      </>
    );
  }
}

export default Posts;
