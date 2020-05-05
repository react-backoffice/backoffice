import React from "react";
import classnames from "classnames";
import { withStyles } from "@material-ui/core";
import { TYPES } from "./constants";
import FormFieldInput from "./FormFieldInput";
import FormFieldDate from "./FormFieldDate";
import FormFieldList from "./FormFieldList";
import FormFieldSwitch from "./FormFieldSwitch";
import FormFieldHidden from "./FormFieldHidden";

const styles = (theme: any) => ({
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
  widthMid: {
    width: `calc(50% - ${theme.spacing(2)}px)`,
  },
  widthFull: {
    width: `calc(100% - ${theme.spacing(2)}px)`,
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
});

type FormFieldBranchProps = {
  type?: string;
  width?: string;
  listItems?: object[];
  selectOptions?: string[];
  content?: React.ReactNode;
  isVisible?: boolean;
  classes: {
    [key: string]: string;
  };
  handleChange: (...args: any[]) => any;
  id: string;
  title: string;
  onAddListItem: () => void;
  onRemoveListItem: () => void;
};

const FormFieldBranch: React.SFC<FormFieldBranchProps> = ({
  type,
  width,
  classes,
  isVisible,
  ...props
}) => {
  const getClasses = () => {
    const classNames = [classes.field];

    if (width === "small") {
      classNames.push(classes.widthSmall);
    } else if (width === "mid") {
      classNames.push(classes.widthMid);
    } else {
      classNames.push(classes.widthFull);
    }
    if (!isVisible) {
      classNames.push(classes.hidden);
    }
    return classnames(...classNames);
  };

  const classNames = getClasses();

  switch (type) {
    case TYPES.SELECT:
      return (
        <FormFieldInput
          {...props}
          select
          options={props.selectOptions}
          className={classNames}
        />
      );

    case TYPES.LIST:
      return <FormFieldList {...props} className={classNames} />;

    case TYPES.MULTILINE:
      return <FormFieldInput {...props} className={classNames} isMultiline />;

    case TYPES.DATE:
    case TYPES.TIME:
    case TYPES.DATETIME:
      return (
        <FormFieldDate
          {...props}
          className={classnames(classNames, classes.fieldDate)}
          type={type}
        />
      );

    case TYPES.SWITCH:
      return (
        <FormFieldSwitch
          {...props}
          className={classnames(classNames, classes.fieldInline)}
        />
      );

    case TYPES.HIDDEN:
      return <FormFieldHidden {...props} />;

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
      return <FormFieldInput {...props} type={type} className={classNames} />;
  }
};

FormFieldBranch.defaultProps = {
  type: "text",
  width: "full",
  listItems: [],
  selectOptions: [],
  content: null,
  isVisible: true,
  handleChange: () => {},
};

export default withStyles(styles)(FormFieldBranch);
