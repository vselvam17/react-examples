import "./styles.css";
import { Component } from "react";

class Example2 extends Component {
  constructor() {
    super();
    this.state = { userData: {} };
  }

  render() {
    var userName = this.userData;
    console.log("******" + userName); //undefined
    return <div></div>;
  }
}

export default Example2;
