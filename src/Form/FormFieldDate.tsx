import React from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  DatePicker,
  TimePicker,
} from "@material-ui/pickers";
import { TYPES } from "./constants";

type FormFieldDateProps = {
  type: any;
  id: string;
  title: string;
  value?: string | number;
  format?: string;
  helperText?: string;
  isRequired?: boolean;
  className: string;
  handleChange: (...args: any[]) => any;
};

const FormFieldDate: React.SFC<FormFieldDateProps> = ({
  type,
  id,
  title,
  value,
  format,
  isRequired = false,
  handleChange,
  helperText,
  className,
}) => {
  let additionalAttributes = {};
  let Component;
  switch (type) {
    case TYPES.TIME:
      Component = TimePicker;
      break;
    case TYPES.DATE:
      Component = DatePicker;
      additionalAttributes = {
        leftArrowIcon: <KeyboardArrowLeftIcon />,
        rightArrowIcon: <KeyboardArrowRightIcon />,
      };
      break;
    default:
      Component = DateTimePicker;
      additionalAttributes = {
        leftArrowIcon: <KeyboardArrowLeftIcon />,
        rightArrowIcon: <KeyboardArrowRightIcon />,
        timeIcon: <AccessTimeIcon />,
        dateRangeIcon: <DateRangeIcon />,
      };
      break;
  }
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Component
        id={id}
        label={title}
        clearable
        value={value && new Date(value).toISOString()}
        onChange={handleChange(id)}
        format={format}
        required={isRequired}
        className={className}
        helperText={helperText}
        {...additionalAttributes}
      />
    </MuiPickersUtilsProvider>
  );
};

FormFieldDate.defaultProps = {
  helperText: undefined,
  format: undefined,
};
export default FormFieldDate;
