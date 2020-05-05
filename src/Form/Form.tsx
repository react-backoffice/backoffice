import React from "react";
import FormBranch from "./FormBranch";
import isValid from "./isValid";

type FormProps = {
  form: object[];
  data: {
    [key: string]: any;
  };
  onDataChanged?: (...args: any[]) => any;
  onSubmit: (...args: any[]) => any;
  submitText?: string;
  isFixedSubmitButton?: boolean;
};

type FormState = {
  loading: boolean;
  error?: boolean;
  data: {} | any;
};

const withForm = (Component: any) =>
  class Form extends React.Component<FormProps, FormState> {
    private fields: any;
    private timer: any;

    constructor(props: FormProps, defaultProps: any) {
      super(props, defaultProps);

      this.state = {
        data: {},
        loading: false,
      };
      this.fields = {};
      this.timer = undefined;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateFieldData = this.updateFieldData.bind(this);
    }
    componentDidMount() {
      const { form, data } = this.props;
      this.generateFields(form, data);
      this.generateMissingData(data);
      this.setState({
        data: this.fields,
      });
    }
    UNSAFE_componentWillReceiveProps({ form, data }: FormProps) {
      this.generateFields(form, data);
      this.generateMissingData(data);
      this.setState({
        data: this.fields,
      });
    }
    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    static getInitialField(field: any, data: any) {
      let valueName = data[field.id] && data[field.id].value;
      let submitValue = valueName;
      if (!valueName && field.value !== undefined) {
        valueName = field.value;
      }
      if (typeof field.beforeSubmit === "function") {
        submitValue = field.beforeSubmit(submitValue);
      }
      return {
        value: valueName,
        submitValue,
        error: !isValid(
          field.type,
          field.isRequired,
          field.validators,
          submitValue,
        ),
      };
    }
    generateFields(fieldset: any[], data: any) {
      fieldset.forEach((field) => {
        if (field.group) {
          this.generateFields(field.data, data);
          return;
        }
        this.fields[field.id] = Form.getInitialField(field, data);
      });
    }
    generateMissingData(data: any) {
      Object.keys(data).forEach((key) => {
        if (this.fields[key]) {
          return;
        }
        this.fields[key] = data[key];
      });
    }
    handleSubmit() {
      const { data, loading } = this.state;
      const { onSubmit } = this.props;
      const errors = Object.values(data).map((field: any) => field.error);
      if (errors.indexOf(true) > -1) {
        this.setState({
          error: true,
        });
        return;
      }
      if (!loading) {
        this.setState(
          {
            loading: true,
            error: false,
          },
          () => {
            this.timer = setTimeout(() => {
              this.setState({
                loading: false,
              });
            }, 1000);
          },
        );
      }
      onSubmit(data);
    }

    updateFieldData(fieldId: string, value: any, submitValue: any, error: any) {
      const { onDataChanged } = this.props;
      const { data: stateData } = this.state;
      const data = {
        ...stateData,
      };
      data[fieldId] = {
        value,
        submitValue,
        error,
      };

      onDataChanged && onDataChanged(data);

      this.setState({
        data,
      });
    }

    render() {
      return (
        <Component
          handleSubmit={this.handleSubmit}
          updateFieldData={this.updateFieldData}
          {...this.props}
          {...this.state}
        />
      );
    }
  };

export default withForm(FormBranch);
