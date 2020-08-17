import React from "react";
import keycode from "keycode";
import easeInOutQuad from "../utils/easeInOutQuad";
import ListingBranch from "./ListingBranch";

const getStringContent = (content: any) => {
  let matchContent = content;
  if (content.constructor === Array) {
    matchContent = content.join(" ");
  } else if (typeof content === "object") {
    matchContent = Object.values(content).join(" ");
  }
  return matchContent.toLowerCase();
};

const tryToMatch = (value: any, content: any) => {
  const initialContent = content;

  if (!content) {
    return false;
  }

  const contentToSearch = getStringContent(initialContent);
  if (contentToSearch.indexOf(value) > -1) {
    return true;
  }
  return false;
};

const getSearchableHeaders = (headers: Record<string, any>[]) =>
  headers.filter((header) => header.isSearchable).map((header) => header.id);

const filterElement = (
  element: Record<string, any>,
  value: any,
  searchables: any,
) => {
  const searchValue = value.toLowerCase();
  let newElement: Record<string, any> | undefined = undefined;

  Object.keys(element).forEach((key) => {
    if (searchables.indexOf(key) > -1) {
      const matched = tryToMatch(searchValue, element[key]);

      if (matched) {
        newElement = {
          ...element,
        };
      }
    }
  });

  return newElement;
};

export type Header = {
  id: string;
  label: string;
  isPaddingDisabled?: boolean;
  isSearchable?: boolean;
  isNumeric?: boolean;
  transformContent?: (
    value: string,
    data: Record<string, any>,
  ) => string | React.ReactNode;
};

type ListingProps = {
  orderBy: string;
  order?: "asc" | "desc";
  hasLoader?: boolean;
  data: object[];
  headers: Header[];
  toolbarContent?: React.ReactNode;
  onUpdateSelection?: (...args: any[]) => any;
  id?: string;
  onClick?: (...args: any[]) => any;
  title?: string;
  isIntegated?: boolean;
};

type ListingState = {
  order?: string;
  orderBy?: string;
  data: any[];
  searchable: any[];
  page: number;
  rowsPerPage?: number;
  selected: any[];
  id: null;
  searchValue?: string;
};

const withListing = (Component: any) =>
  class Listing extends React.Component<ListingProps, ListingState> {
    private node: any;

    constructor(props: ListingProps, context: any) {
      super(props, context);

      const { data, orderBy, order, headers } = props;
      const sorting = {
        order: order || "asc",
        orderBy: orderBy || "id",
      };

      this.state = {
        ...sorting,
        selected: [],
        data: this.sortData(data, sorting.orderBy, sorting.order) || [],
        page: 0,
        rowsPerPage: 10,
        searchable: getSearchableHeaders(headers) || [],
        id: null,
      };

      this.node = React.createRef();

      this.handleRequestSort = this.handleRequestSort.bind(this);
      this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleCheckClick = this.handleCheckClick.bind(this);
      this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
      this.handleChangePage = this.handleChangePage.bind(this);
      this.isSelected = this.isSelected.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidUpdate({ data }: ListingProps) {
      if (data.length !== this.props.data.length) {
        const { order, orderBy } = this.props;

        this.setState({
          data: this.sortData(this.props.data, orderBy, order),
        });

        this.handleFilter(this.state.searchValue);
      }
    }

    sortData(data: any, orderBy: any, order: any) {
      const { headers } = this.props;
      const orderByHeader: any = headers.filter(
        (header: any) => header.id === orderBy,
      )[0];

      let { transformData } = orderByHeader;

      if (!data) {
        return data;
      }

      if (typeof transformData !== "function") {
        transformData = (values: any) => values;
      }

      const transformedData = data.map((element: any) => ({
        ...element,
        [orderBy]: transformData(element[orderBy]),
      }));

      const sortedData = transformedData.sort((a: any, b: any) =>
        a[orderBy] < b[orderBy] ? -1 : 1,
      );

      if (order === "asc") {
        return sortedData;
      }

      return sortedData.reverse();
    }

    handleRequestSort(event: any, property: any) {
      const {
        orderBy: orderByState,
        order: orderState,
        data: dataState,
      } = this.state;
      const orderBy = property;
      let order = "desc";
      let data;

      if (orderByState === property && orderState === "desc") {
        order = "asc";
      }

      if (order === "desc") {
        data = dataState.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1));
      } else {
        data = dataState.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
      }

      this.setState({
        data,
        order,
        orderBy,
      });
    }

    handleSelectAllClick(event: any, checked: any) {
      const { data } = this.state;

      if (checked) {
        this.setState({
          selected: data.map((n: any) => n.id),
        });

        return;
      }

      this.setState({
        selected: [],
      });
    }

    handleKeyDown(event: any, id: string) {
      if (keycode(event) === "space") {
        this.handleCheckClick(id);
      }
    }

    handleCheckClick(id: string) {
      const { onUpdateSelection } = this.props;
      const { selected } = this.state;
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

      this.setState({
        selected: newSelected,
      });
    }

    scrollToElement() {
      if (!this.node.current) {
        return;
      }

      const { offsetTop } = this.node.current;
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
    }

    handleChangePage(event: any, page: any) {
      this.scrollToElement();
      this.setState({
        page,
      });
    }

    handleChangeRowsPerPage(event: any) {
      const rowsPerPage = event.target.value;

      this.setState({
        rowsPerPage,
      });
    }

    handleFilter(value: any) {
      const { data } = this.props;
      const { searchable } = this.state;

      if (value === undefined) {
        this.setState({
          data,
        });

        return;
      }

      const newData = [...data]
        .map((element) => filterElement(element, value, searchable))
        .filter((item) => item !== undefined);

      this.setState({
        data: newData,
        searchValue: value?.toLowerCase(),
      });
    }

    isSelected(id: string) {
      const { selected } = this.state;

      return selected.includes(id);
    }

    render() {
      return (
        <div ref={this.node}>
          <Component
            {...this.props}
            {...this.state}
            handleRequestSort={this.handleRequestSort}
            handleSelectAllClick={this.handleSelectAllClick}
            handleKeyDown={this.handleKeyDown}
            handleCheckClick={this.handleCheckClick}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            handleChangePage={this.handleChangePage}
            onFilter={this.handleFilter}
            isSelected={this.isSelected}
          />
        </div>
      );
    }
  };

export default withListing(ListingBranch) as any;
