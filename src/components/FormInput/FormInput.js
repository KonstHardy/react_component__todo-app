import { Component } from "react";

import "./FormInput.css";

class FormInput extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    return (
      <div>
        <input
          className="form__input"
          type="text"
          autoComplete="off"
          {...this.props}
        />
      </div>
    );
  }
}

export default FormInput;
