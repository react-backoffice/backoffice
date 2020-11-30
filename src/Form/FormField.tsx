import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { makeStyles, Theme } from "@material-ui/core";
import { TYPES, WIDTH } from "./constants";
import Input from "./Inputs/Input";
import DateInput from "./Inputs/DateInput";
import List from "./Inputs/List";
import Switch from "./Inputs/Switch";
import Hidden from "./Inputs/Hidden";

const useStyles = makeStyles((theme: Theme) => ({
  hidden: {
    display: "none",
  },
  headline: {
    marginTop: theme.spacing(3),
  },
  field: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    verticalAlign: "top",
  },
  fieldInline: {
    display: "inline-block",
  },
  fieldDate: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(),
  },
  widthSmall: {
    width: `calc(25% - ${theme.spacing(2)}px)`,
  },

  widthMedium: {
    width: `calc(50% - ${theme.spacing(2)}px)`,
  },

  widthLarge: {
    width: `calc(75% - ${theme.spacing(2)}px)`,
  },

  widthFull: {
    width: `calc(100% - ${theme.spacing(2)}px)`,
  },

  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

type Props = {
  type?: string;
  width?: string;
  options?: string[];
  content?: React.ReactNode;
  isVisible?: boolean;
  id: string;
  title?: string;
  helperText?: string;
  value?: any;
  onChange: (...args: any) => any;
};

const FormField: FunctionComponent<Props> = ({
  type = TYPES.TEXT,
  width = WIDTH.FULL,
  isVisible = true,
  options = [],
  ...props
}) => {
  const classes = useStyles();
  const classNames = classnames(classes.field, {
    [classes.widthSmall]: width === WIDTH.SMALL,
    [classes.widthMedium]: width === WIDTH.MEDIUM,
    [classes.widthLarge]: width === WIDTH.LARGE,
    [classes.widthFull]:
      !width || ![WIDTH.SMALL, WIDTH.MEDIUM, WIDTH.LARGE].includes(width),
    [classes.hidden]: !isVisible,
  });

  switch (type) {
    case TYPES.SELECT:
      return (
        <Input {...props} select options={options} className={classNames} />
      );

    case TYPES.LIST:
      return <List {...props} className={classNames} />;

    case TYPES.MULTILINE:
      return <Input {...props} className={classNames} isMultiline />;

    case TYPES.DATE:
    case TYPES.TIME:
    case TYPES.DATETIME:
      return (
        <DateInput
          {...props}
          className={classnames(classNames, classes.fieldDate)}
          type={type}
        />
      );

    case TYPES.SWITCH:
      return (
        <Switch
          {...props}
          className={classnames(classNames, classes.fieldInline)}
        />
      );

    case TYPES.HIDDEN:
      return <Hidden {...props} />;

    case TYPES.DIVIDER:
      return <hr className={classnames(classNames, classes.divider)} />;

    case TYPES.EMPTY:
      return <div className={classNames} />;

    case TYPES.CONTENT:
      return (
        <div className={classnames(classNames, classes.field)}>
          {props.content}
        </div>
      );

    default:
      return <Input {...props} type={type} className={classNames} />;
  }
};

export default FormField;
