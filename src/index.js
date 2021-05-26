import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import Example1 from './Example1';
//import Example2 from './Example2';
import Example3 from "./Example3";
//var userData = { name:"test", id:1 };

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Example3 />
  </StrictMode>,
  rootElement
);
