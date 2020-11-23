import React from "react";
import MockRouter from "react-mock-router";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Tab } from "@material-ui/core";

import Tabs from ".";
import tabsContent from "../__visual__/data/tabs";

Enzyme.configure({ adapter: new Adapter() });

describe("Tabs", () => {
  it("renders correctly", () => {
    const tree = shallow(
      <MockRouter>
        <Tabs
          data={[
            {
              title: "Title",
              content: <p>Content</p>,
            },
          ]}
        />
      </MockRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly if no data", () => {
    const tree = shallow(
      <MockRouter>
        <Tabs data={[]} />
      </MockRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  it("click second tab", () => {
    const tabAt = 1;
    const tabs = shallow(
      <MockRouter>
        <Tabs data={tabsContent} />
      </MockRouter>,
    );

    expect(window.location.hash).toBe("");
    tabs.find(Tab).at(tabAt).simulate("click");
    expect(window.location.hash).toBe(`#/${tabsContent[tabAt].id}`);
  });

  it("test if correct element is active", () => {
    const tabAt = 1;
    window.location.hash = `#/${tabsContent[tabAt].id}`;

    shallow(
      <MockRouter>
        <Tabs data={tabsContent} />
      </MockRouter>,
    );

    expect(window.location.hash).toBe(`#/${tabsContent[tabAt].id}`);
  });
});
