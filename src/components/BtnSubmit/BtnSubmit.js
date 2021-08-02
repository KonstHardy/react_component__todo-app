import { Component } from "react";

import styles from "./BtnSubmit.module.css";

class BtnSubmit extends Component {
  render() {
    return (
      <button className={styles.root} type="submit">
        Add Post
      </button>
    );
  }
}

export default BtnSubmit;
