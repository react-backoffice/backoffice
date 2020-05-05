import React from "react";
import { Checkbox, TableCell, TableRow } from "@material-ui/core";
import replace from "../utils/replace";

const getCellContent = (content: any, transformContent: any, data: any) => {
  let printableContent = content;

  if (content && content.highlight) {
    printableContent = content.value;
  }

  if (typeof transformContent === "function") {
    printableContent = transformContent(printableContent, data);
  }

  const props: Record<string, any> = {};

  if (typeof printableContent === "string" && content.highlight) {
    printableContent = replace(
      printableContent,
      content.highlight,
      (key: any) => `<span style="background-color: yellow;">${key}</span>`,
    );

    props.dangerouslySetInnerHTML = {
      __html: printableContent,
    };

    printableContent = undefined;
  }

  return {
    content: printableContent,
    props,
  };
};

type ListingLineProps = {
  headers: object[];
  data: {
    [key: string]: any;
  };
  onClick: (...args: any[]) => any;
  isSelected: boolean;
  handleKeyDown: (...args: any[]) => any;
  handleCheckClick: (...args: any[]) => any;
};

class ListingLine extends React.Component<ListingLineProps, {}> {
  renderCells() {
    const { headers, data, onClick } = this.props;
    return headers.map((header: any) => {
      const { content, props } = getCellContent(
        data[header.id],
        header.transformContent,
        data,
      );

      return (
        <TableCell
          key={`cell-${(Math.random() * 10000).toFixed(4)}`}
          padding={header.isPaddingDisabled ? "none" : "default"}
          align={header.isNumeric ? "right" : undefined}
          onClick={() => onClick(data.id)}
          {...props}
        >
          {content}
        </TableCell>
      );
    });
  }

  render() {
    const { data, isSelected, handleKeyDown, handleCheckClick } = this.props;
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

        {this.renderCells()}
      </TableRow>
    );
  }
}

export default ListingLine;
