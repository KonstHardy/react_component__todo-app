import { Component } from "react";

import "./Subtitle.css";

class Subtitle extends Component {
  render() {
    return <h2 className="subtitle">{this.props.message}</h2>;
  }
}

export default Subtitle;
