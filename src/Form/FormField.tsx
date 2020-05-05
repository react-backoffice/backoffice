import React from "react";
import { TYPES } from "./constants";
import FormFieldBranch from "./FormFieldBranch";
import isValid from "./isValid";

type FormFieldProps = {
  id: string;
  type?: string;
  helperText?: string;
  validators?: (
    | string
    | ((...args: any[]) => any)
    | {
        validator?: string | ((...args: any[]) => any);
        message?: string;
      }
  )[];
  isRequired?: boolean;
  handleChange: (...args: any[]) => any;
  getAdditionalValue?: (...args: any[]) => any;
  beforeSubmit?: (...args: any[]) => any;
  value: any;
};

type FormFieldState = {
  value: any;
  messages: any;
  error?: boolean;
  listItems?: any[];
  isDirty: boolean;
  completeFrom: any[];
};

const withFormField = (Component: any) =>
  class FormField extends React.Component<FormFieldProps, FormFieldState> {
    static getCompleteFrom(completeFrom = []) {
      return completeFrom.map((option: any) => {
        let { title } = option;
        if (!option.title) {
          title = option;
        }
        return {
          title,
          tooltip: option.tooltip,
        };
      });
    }

    constructor(props: FormFieldProps) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.initialize = this.initialize.bind(this);
      this.handleAddListItem = this.handleAddListItem.bind(this);
      this.handleRemoveListItem = this.handleRemoveListItem.bind(this);
    }

    state = {
      listItems: [],
      value: "",
      isDirty: false,
      completeFrom: [],
      messages: [],
    };

    UNSAFE_componentWillMount() {
      this.initialize(this.props);
    }
    UNSAFE_componentWillReceiveProps(nextProps: FormFieldProps) {
      this.initialize(nextProps);
    }
    getAdditionalValue(value: any) {
      if (typeof this.props.getAdditionalValue === "function") {
        return this.props.getAdditionalValue(value);
      }
      return value;
    }

    getList({ value, completeFrom }: any) {
      let listItems = this.state.listItems.map((item: any) => item.title);
      if (this.state.isDirty === false) {
        if (value && value.constructor === Array) {
          listItems = [...value];
        } else {
          listItems = [];
        }
      }
      const allCompleteFrom = FormField.getCompleteFrom(completeFrom);
      const transformedListItems = this.getAdditionalValue(listItems);
      listItems = transformedListItems.map((selectedValue: any) => {
        if (allCompleteFrom.length > 0) {
          return allCompleteFrom.filter(
            (option) => option.title === selectedValue,
          )[0];
        }
        return {
          title: selectedValue,
        };
      });
      return {
        completeFrom: allCompleteFrom,
        value: "",
        isDirty: true,
        listItems,
      };
    }

    initialize(props: FormFieldProps) {
      const isList = props.type === "list";
      let state = {};
      if (isList) {
        state = this.getList(props);
      } else {
        state = {
          value: this.getAdditionalValue(props.value),
        };
      }
      this.setState(state);
    }

    isValid(value: any) {
      const { type, isRequired, validators } = this.props;
      return isValid(type, isRequired, validators, value);
    }

    handleChange(fieldId: string) {
      return (event: any) => {
        let newValue;

        if (event.target) {
          newValue = event.target.value;
          // eslint-disable-next-line no-underscore-dangle
        } else if (event._isAMomentObject) {
          newValue = event.valueOf();
        }

        let submitValue = newValue;

        if (typeof this.props.beforeSubmit === "function") {
          submitValue = this.props.beforeSubmit(submitValue);
        }

        const isValidWithMessages = this.isValid(submitValue);
        const error = !isValidWithMessages.isValid;

        if (this.props.type === TYPES.NUMBER) {
          newValue = parseFloat(newValue);
        }

        this.setState({
          value: newValue,
          messages: isValidWithMessages.messages || [],
          error,
        });
        this.props.handleChange(fieldId, newValue, submitValue, error);
      };
    }

    handleAddListItem(option: any) {
      this.setState({
        listItems: [...this.state.listItems, option],
      });
    }

    handleRemoveListItem(option: any) {
      const listItems = [...this.state.listItems];
      const flatListItems = listItems.map((item: any) => item.title);
      const index = flatListItems.indexOf(option.title);
      if (index > -1) {
        listItems.splice(index, 1);
      }
      this.setState({
        listItems,
      });
    }

    render() {
      const { helperText, ...props } = this.props;
      const { messages, ...state } = this.state;
      let helperMessages: any[] = [];

      if (helperText) {
        helperMessages = [helperText, ...messages];
      }
      return (
        <Component
          {...props}
          {...state}
          helperText={helperMessages.join(" ")}
          handleChange={this.handleChange}
          onRemoveListItem={this.handleRemoveListItem}
          onAddListItem={this.handleAddListItem}
        />
      );
    }
  };

export default withFormField(FormFieldBranch);
