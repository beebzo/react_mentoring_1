import ReactDOM from "react-dom";
import React from "react";

const CreateElement = React.createElement("h1", {}, "Hello React");

const rootElement = document.getElementById("root");

ReactDOM.render(CreateElement, rootElement);
