import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import keycode from "keycode";
import easeInOutQuad from "../utils/easeInOutQuad";
import ListingBranch from "./ListingBranch";
import filterElement from "./utils/filterElement";
import sortData from "./utils/sortData";

export type Header = {
  id: string;
  label: string;
  isPaddingDisabled?: boolean;
  isSearchable?: boolean;
  isNumeric?: boolean;
  transformContent?: (
    value: string,
    data?: Record<string, any>,
  ) => string | React.ReactNode;
};

const getSearchableHeaders = (headers: Header[]) =>
  headers.filter((header) => header.isSearchable).map((header) => header.id);

type Props = {
  id?: string;
  title?: string;
  isIntegrated?: boolean;
  orderBy: string;
  order?: "asc" | "desc";
  hasLoader?: boolean;
  data: Record<string, any>[];
  headers: Header[];
  toolbarContent?: React.ReactNode;
  onUpdateSelection?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
  renderToolbarContent?: (selected: string[]) => React.ReactNode;
};

const Listing: FunctionComponent<Props> = ({
  data: dataProp,
  orderBy: orderByProp,
  order: orderProp,
  headers,
  onUpdateSelection,
  ...rest
}) => {
  const node = useRef<any>();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">(orderProp || "asc");
  const [orderBy, setOrderBy] = useState<string>(orderByProp || "id");
  const [data, setData] = useState<any[]>(
    sortData(headers, dataProp, orderBy, order) || [],
  );
  const isSelected = (id: string) => selected.includes(id);
  const searchable = getSearchableHeaders(headers) || [];
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (dataProp.length !== dataProp.length) {
      setData(sortData(headers, data, orderBy, order));

      handleFilter(searchValue);
    }
  }, [dataProp, orderProp, orderByProp, headers]);

  useEffect(() => {
    if (order === "desc") {
      setData(data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)));
    } else {
      setData(data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)));
    }
  }, [order, orderBy]);

  const handleRequestSort = (event: any, property: string) => {
    setOrderBy(property);

    if (property === orderBy) {
      setOrder(order === "desc" ? "asc" : "desc");
    }
  };

  const scrollToElement = () => {
    if (!node.current) {
      return;
    }

    const offsetTop = node.current?.offsetTop;
    const start = window.scrollY;
    const change = offsetTop - start;
    const increment = 20;
    const duration = 250;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = easeInOutQuad(currentTime, start, change, duration);

      window.scrollTo(0, val);

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  const handleChangePage = (event: any, page: any) => {
    scrollToElement();
    setPage(page);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.target.value);
  };

  const handleFilter = (value: any) => {
    if (value === undefined) {
      setData(dataProp);

      return;
    }

    const newData = [...dataProp]
      .map((element) => filterElement(element, value, searchable))
      .filter((item) => item !== undefined);

    setData(newData);
    setSearchValue(value?.toLowerCase());
  };

  const handleSelectAllClick = (event: any, checked: any) => {
    if (checked) {
      setSelected(data.map((n: any) => n.id));

      return;
    }

    setSelected([]);
  };

  const handleCheckClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);

    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = [...selected.slice(1)];
    } else if (selectedIndex === selected.length - 1) {
      newSelected = [...selected.slice(0, -1)];
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    onUpdateSelection && onUpdateSelection(newSelected);

    setSelected(newSelected);
  };

  const handleKeyDown = (event: any, id: string) => {
    if (keycode(event) === "space") {
      handleCheckClick(id);
    }
  };

  return (
    <div ref={node}>
      <ListingBranch
        {...rest}
        page={page}
        rowsPerPage={rowsPerPage}
        headers={headers}
        order={order}
        orderBy={orderBy}
        data={data}
        selected={selected}
        handleRequestSort={handleRequestSort}
        handleSelectAllClick={handleSelectAllClick}
        handleKeyDown={handleKeyDown}
        handleCheckClick={handleCheckClick}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
        onFilter={handleFilter}
        isSelected={isSelected}
      />
    </div>
  );
};

export default Listing;
