import React, { FunctionComponent } from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { BasePickerProps } from "@material-ui/pickers/typings/BasePicker";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  DatePicker,
  TimePicker,
} from "@material-ui/pickers";
import { TYPES } from "../constants";

type BaseElementProps = {
  type: string;
  value?: Date;
  label?: string;
  clearable?: boolean;
  required?: boolean;
};

type ElementProps = BasePickerProps & BaseElementProps;

const Element: FunctionComponent<ElementProps> = ({ type, ...props }) => {
  switch (type) {
    case TYPES.TIME: {
      return <TimePicker {...props} />;
    }

    case TYPES.DATE: {
      return (
        <DatePicker
          {...props}
          leftArrowIcon={<KeyboardArrowLeftIcon />}
          rightArrowIcon={<KeyboardArrowRightIcon />}
        />
      );
    }

    default: {
      return (
        <DateTimePicker
          {...props}
          leftArrowIcon={<KeyboardArrowLeftIcon />}
          rightArrowIcon={<KeyboardArrowRightIcon />}
          timeIcon={<AccessTimeIcon />}
          dateRangeIcon={<DateRangeIcon />}
        />
      );
    }
  }
};

type Props = BaseElementProps & {
  id: string;
  title?: string;
  format?: string;
  helperText?: string;
  isRequired?: boolean;
  className: string;
  value?: any;
  onChange: (...args: any) => any;
};

const DateInput: FunctionComponent<Props> = ({
  type,
  title,
  isRequired = false,
  value,
  onChange,
}) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Element
        type={type}
        label={title}
        clearable
        value={value && new Date(value)}
        onChange={onChange}
        required={isRequired}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
