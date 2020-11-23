import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

import Container from "./__visual__/Container";

const element = document.querySelector("[data-react-app]");

const render = (Component: FunctionComponent) => {
  ReactDOM.render(<Component />, element);
};

render(Container);
