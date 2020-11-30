import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { BasePickerProps } from "@material-ui/pickers/typings/BasePicker";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import {
  LocalizationProvider,
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

type ElementProps = BasePickerProps &
  BaseElementProps & {
    renderInput: (props: any) => any;
  };

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
  className,
}) => {
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Element
        type={type}
        label={title}
        renderInput={(props: any) => (
          <TextField className={className} {...props} />
        )}
        value={value && new Date(value)}
        onChange={onChange}
        clearable
        required={isRequired}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
