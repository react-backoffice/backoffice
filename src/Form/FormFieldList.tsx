import React from "react";
import replace from "../utils/replace";
import FormFieldListBranch from "./FormFieldListBranch";

type WithFormFieldListProps = {
  listItems?: Record<string, any>[];
  completeFrom?: Record<string, any>[];
  handleChange: (...args: any[]) => any;
  onAddListItem: (...args: any[]) => any;
  onRemoveListItem: (...args: any[]) => any;
  className: string;
};

type WithFormFieldListState = {
  value?: string;
  availableOptions: any[];
  showMenu: boolean;
};

const withFormFieldList = (Component: any) =>
  class WithFormFieldList extends React.Component<
    WithFormFieldListProps,
    WithFormFieldListState
  > {
    constructor(props: WithFormFieldListProps) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.getAvailableOptions = this.getAvailableOptions.bind(this);
    }

    state = {
      availableOptions: [],
      showMenu: false,
      value: undefined,
    };

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    getAvailableOptions(value: any) {
      const { completeFrom, listItems } = this.props;
      const lowerValue = value.toLowerCase();
      const flatListItems =
        listItems && listItems.map((item: any) => item.title);
      // Remove selected items
      let availableOptions =
        completeFrom &&
        completeFrom.filter(
          (option) =>
            flatListItems && flatListItems.indexOf(option.title) === -1,
        );
      // Overload data
      availableOptions =
        availableOptions &&
        availableOptions.map((option) => {
          let { title } = option;
          if (!option.title) {
            title = option;
          }
          return {
            title,
            tooltip: option.tooltip,
            text: replace(
              title,
              lowerValue,
              (searchResult: string) => `<b>${searchResult}</b>`,
            ),
          };
        });

      // Filter for real
      availableOptions =
        availableOptions &&
        availableOptions.filter(
          (option) => option.title.toLowerCase().indexOf(lowerValue) > -1,
        );

      return availableOptions as Record<string, any>[];
    }

    timer: any = undefined;

    handleChange(id: string) {
      return (event: any) => {
        const parentFunction = this.props.handleChange(id);
        const { value } = event.target;
        this.setState({
          value,
          availableOptions: this.getAvailableOptions(value),
          showMenu: value.length > 0,
        });
        return parentFunction(event);
      };
    }

    handleClick(option: any) {
      return () => {
        this.props.onAddListItem(option);
        this.setState({
          value: "",
        });
      };
    }

    handleBlur() {
      this.timer = setTimeout(() => {
        this.setState({
          showMenu: false,
        });
      }, 100);
    }

    handleDelete(option: any) {
      return () => {
        this.props.onRemoveListItem(option);
      };
    }
    handleKeyPress(event: any) {
      const { value } = this.state;
      const { completeFrom } = this.props;
      if (event.which === 13 && completeFrom && completeFrom.length === 0) {
        this.props.onAddListItem({
          title: value,
        });
        this.setState({
          value: "",
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onClick={this.handleClick}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onBlur={this.handleBlur}
          onDelete={this.handleDelete}
        />
      );
    }
  };

const FormFieldList = withFormFieldList(FormFieldListBranch);
export default FormFieldList;
