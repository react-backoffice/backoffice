import React from "react";
import { shallow } from "enzyme";

import Icon from "@material-ui/icons/AccessAlarm";

import MenuItem from "./MenuItem";

it("renders correctly", () => {
  const tree = shallow(
    <MenuItem title="Title" url="/" redirectTo={() => {}} />,
  );

  expect(tree).toMatchSnapshot();
});

it("renders correctly with icon", () => {
  const tree = shallow(
    <MenuItem title="Title" url="/" redirectTo={() => {}} icon={<Icon />} />,
  );

  expect(tree).toMatchSnapshot();
});

it("renders correctly disabled", () => {
  const tree = shallow(
    <MenuItem title="Title" url="/" redirectTo={() => {}} isDisabled />,
  );

  expect(tree).toMatchSnapshot();
});
