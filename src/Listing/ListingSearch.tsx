import React from "react";
import ListingSearchBranch from "./ListingSearchBranch";

type WithListingSearchProps = {
  onFilter: (...args: any[]) => any;
};

type WithListingSearchState = {
  open: boolean;
};

const withListing = (Component: any) =>
  class WithListingSearch extends React.Component<
    WithListingSearchProps,
    WithListingSearchState
  > {
    private searchRef: any;

    constructor(props: WithListingSearchProps) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.getSearchRef = this.getSearchRef.bind(this);
    }
    state = {
      open: false,
    };

    getSearchRef(node: any) {
      this.searchRef = node;
    }

    handleClick() {
      const { open } = this.state;
      const { onFilter } = this.props;
      const newOpen = !open;
      if (this.searchRef && newOpen) {
        this.searchRef.focus();
      }
      this.setState({
        open: newOpen,
      });
      onFilter(undefined);
    }

    handleFilter(event: any) {
      const { open } = this.state;
      const { onFilter } = this.props;
      const { value } = event.target;
      if (open) {
        onFilter(value);
      } else {
        onFilter(undefined);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onClick={this.handleClick}
          onFilter={this.handleFilter}
          getSearchRef={this.getSearchRef}
        />
      );
    }
  };

export default withListing(ListingSearchBranch) as any;
