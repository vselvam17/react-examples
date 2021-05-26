import "./styles.css";
import { Component } from "react";

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  componentDidMount() {
    this.state.count = 2;
    // this.setState({count:2});
  }

  render() {
    //render
    return <div>{this.state.count}</div>;
  }
}

export default Example3;
