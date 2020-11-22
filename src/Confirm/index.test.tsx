import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Confirm from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Confirm", () => {
  it("renders correctly", () => {
    const tree = shallow(
      <Confirm title="Title" description="Desc" onConfirm={() => {}} />,
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without close button", () => {
    const tree = shallow(
      <Confirm
        title="Title"
        description="Desc"
        onConfirm={() => {}}
        hasCloseButton={false}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it("confirm is handled", () => {
    const onConfirm = jest.fn();
    const confirm = shallow(
      <Confirm isOpen title="Title" description="Desc" onConfirm={onConfirm} />,
    );

    expect((confirm.state() as any).isOpen).toBe(true);
    (confirm.instance() as any).handleConfirm();

    expect(onConfirm).toHaveBeenCalled();
  });

  it("close is handled", () => {
    const onClose = jest.fn();
    const confirm = shallow(
      <Confirm
        isOpen
        title="Title"
        description="Desc"
        onConfirm={() => {}}
        onClose={onClose}
      />,
    );

    expect((confirm.state() as any).isOpen).toBe(true);
    (confirm.instance() as any).handleClose();

    expect(onClose).toHaveBeenCalled();
  });

  it("changes open", () => {
    const confirm = shallow(
      <Confirm isOpen description="Desc" onConfirm={() => {}} />,
    );

    confirm.setProps({
      isOpen: false,
    });
  });
});
