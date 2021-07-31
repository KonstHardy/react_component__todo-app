import { Component } from "react";

import "./Posts.css";

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
                <li className="posts__item" key={post.id}>
                  <div className="posts__body">
                    <div className="posts__title">
                      <span className="posts__title-text">{post.title}</span>
                    </div>
                    <p className="posts__desc">{post.desc}</p>
                  </div>
                  <button
                    className="btn__remove"
                    onClick={() => {
                      this.props.removePost(post.id);
                    }}
                  >
                    <span className="btn__line"></span>
                    <span className="btn__line"></span>
                  </button>
                </li>
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
