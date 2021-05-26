import "./styles.css";
import { Component } from "react";

class Example1 extends Component {
  constructor() {
    super();
    console.log("constructor called..");
  }

  componentDidMount() {
    console.log("component did mount...");
  }

  render() {
    console.log("render method called...");
    return <div></div>;
  }
}

export default Example1;
