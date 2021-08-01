import { Component } from "react";

import "./Post.css";

class Post extends Component {
  state = {};

  render() {
    return (
      <li className="post__item">
        <div className="post__body">
          <div className="post__title">
            <span className="post__title-text">{this.props.post.title}</span>
          </div>
          <p className="post__desc">{this.props.post.desc}</p>
        </div>
        <button
          className="btn__remove"
          onClick={() => {
            this.props.removePost(this.props.post.id);
          }}
        >
          <span className="btn__line"></span>
          <span className="btn__line"></span>
        </button>
      </li>
    );
  }
}

export default Post;
