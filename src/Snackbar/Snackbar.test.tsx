import React from "react";
import { shallow } from "enzyme";

import Snackbar from ".";

it("renders correctly", () => {
  const tree = shallow(<Snackbar message="Message" />);

  expect(tree).toMatchSnapshot();
});
