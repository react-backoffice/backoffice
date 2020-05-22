import React from "react";
import { shallow } from "enzyme";

import Input from "../Inputs/Input";

it("renders correctly", () => {
  const tree = shallow(<Input id="" onChange={() => {}} />);

  expect(tree).toMatchSnapshot();
});

it("renders disabled", () => {
  const tree = shallow(<Input id="" onChange={() => {}} isDisabled />);

  expect(tree).toMatchSnapshot();
});
