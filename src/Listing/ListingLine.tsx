import React, { FunctionComponent } from "react";
import { Checkbox, TableCell, TableRow } from "@material-ui/core";
import replace from "../utils/replace";
import { Header } from "./Listing";

const getCellContent = (content: string, match: string) => {
  return replace(
    content,
    match,
    (key: any) => `<span style="background-color: yellow;">${key}</span>`,
  );
};

type CellProps = {
  headers: Header[];
  data: {
    [key: string]: any;
  };
  onClick?: (...args: any[]) => any;
  searchValue?: string;
};

const Cells: FunctionComponent<CellProps> = ({
  headers,
  data,
  onClick,
  searchValue,
}) => (
  <>
    {headers.map((header, index: number) => {
      let content: string | React.ReactNode | null = data[header.id];
      let props = {};

      if (
        header.transformContent &&
        typeof header.transformContent === "function"
      ) {
        content = header.transformContent(data[header.id], data);
      }

      if (
        header.isSearchable &&
        searchValue !== undefined &&
        typeof content === "string"
      ) {
        props = {
          dangerouslySetInnerHTML: {
            __html: getCellContent(content, searchValue),
          },
        };

        content = null;
      }

      return (
        <TableCell
          key={`cell-${header.id}-${index}`}
          padding={header.isPaddingDisabled ? "none" : "default"}
          align={header.isNumeric ? "right" : undefined}
          onClick={() => onClick && onClick(data.id)}
          {...props}
        >
          {content}
        </TableCell>
      );
    })}
  </>
);

type Props = {
  headers: Header[];
  data: {
    [key: string]: any;
  };
  onClick?: (...args: any[]) => any;
  isSelected: boolean;
  handleKeyDown: (...args: any[]) => any;
  handleCheckClick: (...args: any[]) => any;
  searchValue?: string;
};

const ListingLine: FunctionComponent<Props> = ({
  data,
  isSelected,
  handleKeyDown,
  handleCheckClick,
  onClick,
  headers,
  searchValue,
}) => {
  return (
    <TableRow
      hover
      onKeyDown={(event) => handleKeyDown(event, data.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      selected={isSelected}
    >
      <TableCell padding="checkbox" onClick={() => handleCheckClick(data.id)}>
        <Checkbox color="primary" checked={isSelected} />
      </TableCell>

      <Cells
        headers={headers}
        data={data}
        onClick={onClick}
        searchValue={searchValue}
      />
    </TableRow>
  );
};

export default ListingLine;
