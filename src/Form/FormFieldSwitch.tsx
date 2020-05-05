import React from "react";
import { FormControlLabel, FormHelperText, Switch } from "@material-ui/core";

type FormFieldSwitchProps = {
  id: string;
  title: string;
  handleChange: (...args: any[]) => any;
  helperText?: string;
  className?: string;
  isDisabled?: boolean;
};

type FormFieldSwitchState = {
  value: boolean;
};

class FormFieldSwitch extends React.Component<
  FormFieldSwitchProps,
  FormFieldSwitchState
> {
  state = {
    value: false,
  };

  handleChange(id: string) {
    const { handleChange } = this.props;
    const { value } = this.state;
    const func = handleChange(id);
    return () => {
      const newValue = !value;
      this.setState({
        value: newValue,
      });
      return func({
        target: {
          value: newValue,
        },
      });
    };
  }

  render() {
    const { id, title, helperText, isDisabled, className } = this.props;
    const { value } = this.state;
    return (
      <div className={className}>
        <FormControlLabel
          disabled={isDisabled}
          control={
            <Switch
              checked={value}
              onChange={this.handleChange(id)}
              value={id}
              color="primary"
            />
          }
          label={title}
        />

        {helperText ? (
          <FormHelperText disabled={isDisabled}>{helperText}</FormHelperText>
        ) : null}
      </div>
    );
  }
}

export default FormFieldSwitch;
