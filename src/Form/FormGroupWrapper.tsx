import React, { FunctionComponent, useRef, useMemo } from "react";
import classNames from "classnames";
import { Paper, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  group: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
  },

  groupIntegrated: {
    paddingTop: theme.spacing(3),
  },

  hidden: {
    display: "none",
  },
}));

type Props = {
  isPaper?: boolean;
  isVisible?: boolean;
};

const FormGroupWrapper: FunctionComponent<Props> = ({
  isPaper = true,
  isVisible = true,
  children,
  ...rest
}) => {
  const classes = useStyles();
  const elementRef = useRef<FunctionComponent<{ className: string }>>(
    (props) => <div {...props} />,
  );

  useMemo(() => {
    if (isPaper) {
      elementRef.current = (props: any) => <Paper {...props} />;
    }
  }, [isPaper]);

  return (
    <elementRef.current
      className={classNames({
        [classes.group]: isPaper,
        [classes.groupIntegrated]: !isPaper,
        [classes.hidden]: !isVisible,
      })}
      {...rest}
    >
      {children}
    </elementRef.current>
  );
};

export default FormGroupWrapper;
