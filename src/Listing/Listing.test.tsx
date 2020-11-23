import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Checkbox, TablePagination, IconButton } from "@material-ui/core";

import Listing from ".";

import headers from "../__visual__/data/listing_headers";
import data from "../__visual__/data/listing_data";
import ListingHeader from "./ListingHeader";

Enzyme.configure({ adapter: new Adapter() });

describe("Listing", () => {
  it("renders correctly", () => {
    const tree = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
        onUpdateSelection={() => {}}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with Loader", () => {
    const tree = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
        hasLoader
        onUpdateSelection={() => {}}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it("changes props", () => {
    const origSortData = Listing.prototype.sortData;
    Listing.prototype.sortData = jest.fn();

    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
        onUpdateSelection={() => {}}
      />,
    );

    listing.setProps({
      orderBy: "name",
      data: null,
    });

    expect(Listing.prototype.sortData).toHaveBeenCalled();
    Listing.prototype.sortData = origSortData;
  });

  it("does a new sorting", () => {
    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
        onUpdateSelection={() => {}}
      />,
    );

    expect((listing.state() as any).data[0].username).toBe("Antonette");

    (listing.instance() as any).handleRequestSort({}, "name");
    expect((listing.state() as any).data[0].username).toBe("Karianne");

    (listing.instance() as any).handleRequestSort({}, "name");
    expect((listing.state() as any).data[0].username).toBe("Kamren");
  });

  it("handles click on a checkbox", () => {
    const onUpdateSelection = jest.fn();
    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
        onUpdateSelection={onUpdateSelection}
      />,
    );

    (listing.instance() as any).handleCheckClick("foo");
    expect((listing.state() as any).selected).toEqual(["foo"]);
    expect(onUpdateSelection).toHaveBeenCalled();

    (listing.instance() as any).handleCheckClick("bar");
    expect((listing.state() as any).selected).toEqual(["foo", "bar"]);

    (listing.instance() as any).handleCheckClick("baz");
    expect((listing.state() as any).selected).toEqual(["foo", "bar", "baz"]);

    (listing.instance() as any).handleCheckClick("bar");
    expect((listing.state() as any).selected).toEqual(["foo", "baz"]);

    (listing.instance() as any).handleCheckClick("baz");
    expect((listing.state() as any).selected).toEqual(["foo"]);

    (listing.instance() as any).handleCheckClick("foo");
    expect((listing.state() as any).selected).toEqual([]);
  });

  it("allows to filter", () => {
    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
      />,
    );

    const { length } = (listing.state() as any).data;

    (listing.instance() as any).handleFilter("");

    expect((listing.state() as any).data.length).toEqual(length);

    (listing.instance() as any).handleFilter("f0ooasdnajsbhdhuq2871dasd");

    expect((listing.state() as any).data.length).toEqual(0);
  });

  it("allows to filter even if there are empty filters", () => {
    data[0].name = null as any;

    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
      />,
    );

    const { length } = ((listing.state() as any) as any).data;

    ((listing.instance() as any) as any).handleFilter("");

    expect(((listing.state() as any) as any).data.length).toEqual(length);

    ((listing.instance() as any) as any).handleFilter(
      "f0ooasdnajsbhdhuq2871dasd",
    );

    expect(((listing.state() as any) as any).data.length).toEqual(0);
  });

  it("selects all elements when checkbox is clicked", () => {
    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
      />,
    );

    const { onChange } = listing.find(ListingHeader).find(Checkbox).props();
    onChange && onChange({} as any, true);

    expect(((listing.state() as any) as any).selected.length).toBe(data.length);
  });

  it("deselects all elements when checkbox is unset", () => {
    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
      />,
    );

    const { onChange } = listing.find(ListingHeader).find(Checkbox).props();

    onChange && onChange({} as any, false);

    expect(((listing.state() as any) as any).selected.length).toBe(0);
  });

  it("handles changing the no of rows per age", () => {
    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
      />,
    );

    const { onChangeRowsPerPage } = listing.find(TablePagination).props();
    onChangeRowsPerPage &&
      onChangeRowsPerPage({
        target: {
          value: "100",
        },
      } as any);

    expect((listing.state() as any).rowsPerPage).toBe(100);
  });

  it("handles changing the page", () => {
    window.scrollTo = () => {};

    const listing = shallow(
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => {}}
      />,
    );

    listing.find(TablePagination).find(IconButton).last().simulate("click");

    expect((listing.state() as any).page).toBe(1);
  });
});
