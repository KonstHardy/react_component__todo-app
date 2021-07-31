import { Component } from "react";

import "./App.css";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

class App extends Component {
  state = {
    posts: [
      {
        id: 3,
        text: " Third task",
        desc: "State & Props",
      },
      {
        id: 2,
        text: "Second task",
        desc: "Create Components",
      },
      {
        id: 1,
        text: "First task",
        desc: "Create React App",
      },
    ],
  };

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ value: +new Date() });
    // }, 5000);
  }

  // handleRemove = () => {
  //   this.setState(
  //     [...this.state.posts].filter((post) => post.id !== this.post.id)
  //   );
  // };

  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <h1 className="App__title">TODO App</h1>
          <Form />
          <Posts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
