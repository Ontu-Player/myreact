import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Hello {this.state.date.toLocaleTimeString(this.props.local)}</h1>
        <h1>Hello {this.state.date.toLocaleTimeString(this.props.local)}</h1>
      </div>
    );
  }
}

export default App;
