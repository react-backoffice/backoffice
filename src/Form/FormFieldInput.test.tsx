import React from "react";
import { shallow } from "enzyme";

import FormFieldInput from "./FormFieldInput";

it("renders correctly", () => {
  const tree = shallow(<FormFieldInput id="" />);

  expect(tree).toMatchSnapshot();
});

it("renders disabled", () => {
  const tree = shallow(<FormFieldInput id="" isDisabled />);

  expect(tree).toMatchSnapshot();
});
