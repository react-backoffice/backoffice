import React from "react";
import ReactDOM from "react-dom";

import Container from "./tests/Container";

const element = document.querySelector("[data-react-app]");

const render = (Component: any) => {
  ReactDOM.render(<Component />, element);
};

render(Container);
