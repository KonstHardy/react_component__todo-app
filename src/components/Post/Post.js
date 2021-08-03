import { Component } from "react";

import styles from "./Post.module.css";

class Post extends Component {
  handleRemove = () => {
    this.props.removePost(this.props.post.id);
  };

  render() {
    return (
      <li className={styles.post__item}>
        <div className={styles.post__body}>
          <p className={styles.post__title}> {this.props.post.title}</p>
          <p className={styles.post__desc}>{this.props.post.description}</p>
        </div>
        <button className={styles.btn__remove} onClick={this.handleRemove}>
          <span className={styles.btn__line}></span>
          <span className={styles.btn__line}></span>
        </button>
      </li>
    );
  }
}

export default Post;
