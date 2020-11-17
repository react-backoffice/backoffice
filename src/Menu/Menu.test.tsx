import React from "react";
import { shallow } from "enzyme";

import Icon from "@material-ui/icons/AccessAlarm";

import Menu from ".";

it("renders correctly", () => {
  const tree = shallow(
    <Menu
      data={[
        {
          type: "link",
          title: "Title",
          url: "/",
          icon: <Icon />,
        },
      ]}
      redirectTo={() => {}}
    />,
  );

  expect(tree).toMatchSnapshot();
});
