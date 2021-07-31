import { Component } from "react";

import "./Form.css";

import FormInput from "../FormInput/FormInput";
import BtnSubmit from "../BtnSubmit/BtnSubmit";

class Form extends Component {
  state = {
    title: "",
    desc: "",
  };

  static getDerivedStateFromProps(props, state) {
    if (state.prevValue === props.value) {
      return null;
    }

    return {
      value: props.value,
      prevValue: props.value,
    };
  }

  handleUpdate = () => {
    this.setState((prevState) => {
      // const { title, desc } = prevState;
      // if (title !== "" && desc !== "") {
      //   this.setState({ title: "" });
      //   this.setState({ desc: "" });
      // }
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.title && this.state.desc) {
      console.log("this.state.title", this.state.title);
      console.log("this.state.desc", this.state.desc);

      // this.handleUpdate();
    }
  };

  render() {
    return (
      <>
        <h2 className="subtitle">Your post:</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <FormInput
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <FormInput
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
            placeholder="Description"
          />
          <BtnSubmit />
        </form>
      </>
    );
  }
}

export default Form;
