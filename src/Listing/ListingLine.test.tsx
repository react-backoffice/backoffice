import React from "react";
import { shallow } from "enzyme";
import { Table } from "@material-ui/core";
import { Header } from "./Listing";
import ListingLine from "./ListingLine";
import headers from "../__visual__/data/listing_headers";

const twoHeaders = headers.slice(0, 2) as Header[];

it("renders correctly", () => {
  const tree = shallow(
    <Table>
      <ListingLine
        headers={twoHeaders}
        data={{
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
        }}
        onClick={() => {}}
        handleKeyDown={() => {}}
        handleCheckClick={() => {}}
        isSelected={false}
      />
    </Table>,
  );

  expect(tree).toMatchSnapshot();
});

it("renders selected", () => {
  const tree = shallow(
    <Table>
      <ListingLine
        headers={twoHeaders}
        data={{
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
        }}
        onClick={() => {}}
        handleKeyDown={() => {}}
        handleCheckClick={() => {}}
        isSelected
      />
    </Table>,
  );

  expect(tree).toMatchSnapshot();
});

it("renders highlighted", () => {
  const tree = shallow(
    <Table>
      <ListingLine
        headers={twoHeaders}
        data={{
          id: 1,
          name: {
            value: "Leanne Graham",
            highlight: "Lea",
          },
          username: {
            value: "Leanne Graham",
            highlight: "Bret",
          },
        }}
        onClick={() => {}}
        handleKeyDown={() => {}}
        handleCheckClick={() => {}}
        isSelected
      />
    </Table>,
  );

  expect(tree).toMatchSnapshot();
});
