import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";

import NoMatch from ".";

it("renders correctly", () => {
  const tree = shallow(
    <Router>
      <NoMatch title="Title" />
    </Router>,
  );

  expect(tree).toMatchSnapshot();
});

it("renders correctly with description", () => {
  const tree = shallow(<NoMatch title="Title" description={<p>Desc</p>} />);

  expect(tree).toMatchSnapshot();
});
