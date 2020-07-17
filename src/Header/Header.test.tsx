import React from "react";
import { shallow } from "enzyme";

import Header from ".";

it("renders correctly", () => {
  const tree = shallow(
    <Header
      isOpen
      title="Header"
      isFixed
      onDrawerOpen={() => {}}
      onClick={() => {}}
    />,
  );

  expect(tree).toMatchSnapshot();
});
