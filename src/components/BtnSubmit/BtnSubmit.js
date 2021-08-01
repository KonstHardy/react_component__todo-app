import { Component } from "react";

import styles from "./BtnSubmit.module.css";

class BtnSubmit extends Component {
  render() {
    return (
      <button className={styles.btn__submit} type="submit">
        Add Task
      </button>
    );
  }
}

export default BtnSubmit;
