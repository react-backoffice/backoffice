import React from "react";
import { shallow } from "enzyme";

import ListingToolbar from "./ListingToolbar";

it("renders correctly", () => {
  const tree = shallow(
    <ListingToolbar title="" numSelected={0} onFilter={() => {}} />,
  );

  expect(tree).toMatchSnapshot();
});
