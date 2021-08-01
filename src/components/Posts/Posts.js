import { Component } from "react";

import "./Posts.css";

import Subtitle from "../Subtitle/Subtitle";
import Post from "../Post/Post";

class Posts extends Component {
  state = {};

  render() {
    return (
      <>
        <Subtitle message="List of posts:" />
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
