import React from "react";
import MockRouter from "react-mock-router";
import { shallow } from "enzyme";

import BackButton from ".";

describe("Back Button", () => {
  it("renders correctly", () => {
    const tree = shallow(
      <MockRouter>
        <BackButton url="/" />
      </MockRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  it("updates history on click", () => {
    const push = jest.fn();
    const button = shallow(
      <MockRouter push={push}>
        <BackButton url="/" />
      </MockRouter>,
    );

    button.find(BackButton).simulate("click");

    expect(push).toHaveBeenLastCalledWith("/");
  });
});
