import React from "react";
import { shallow } from "enzyme";

import Switch from "../Inputs/Switch";

it("renders correctly", () => {
  const tree = shallow(
    <Switch id="switch" title="Title" onChange={() => () => {}} />,
  );

  expect(tree).toMatchSnapshot();
});

it("renders disabled", () => {
  const tree = shallow(
    <Switch id="switch" title="Title" onChange={() => () => {}} isDisabled />,
  );

  expect(tree).toMatchSnapshot();
});

it("renders with helper text", () => {
  const tree = shallow(
    <Switch
      id="switch"
      title="Title"
      onChange={() => () => {}}
      helperText="test"
    />,
  );

  expect(tree).toMatchSnapshot();
});
