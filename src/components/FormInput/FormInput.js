import { Component } from "react";

import styles from "./FormInput.module.css";

class FormInput extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    return (
      <div>
        <input
          className={styles.form__input}
          type="text"
          autoComplete="off"
          {...this.props}
        />
      </div>
    );
  }
}

export default FormInput;
