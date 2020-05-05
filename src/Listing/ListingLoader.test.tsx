import React from "react";
import { shallow } from "enzyme";
import { Table } from "@material-ui/core";

import ListingLoader from "./ListingLoader";

it("renders correctly", () => {
  const tree = shallow(
    <Table>
      <ListingLoader cols={1} />
    </Table>,
  );

  expect(tree).toMatchSnapshot();
});
