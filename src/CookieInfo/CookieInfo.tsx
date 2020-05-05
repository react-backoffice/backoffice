import React from "react";
import classNames from "classnames";
import { Button, withStyles } from "@material-ui/core";
import Cookie from "./Cookie";

const styles = (theme: any) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3000,
    display: "flex",
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    transform: "translate(0, -100%)",
    opacity: 0,
    transition: "transform 0.25s, opacity 0s 0.25s",
  },
  rootActive: {
    transform: "translate(0, 0)",
    opacity: 1,
  },
  content: {
    display: "flex",
    flex: 1,
    opacity: 1,
    alignItems: "center",
  },
  button: {
    float: "right",
  },
});

type CookieInfoProps = {
  isOpen?: boolean;
  onAccept?: (...args: any[]) => any;
  buttonText?: string;
  classes: {
    [key: string]: string;
  };
};

class CookieInfo extends React.Component<CookieInfoProps, {}> {
  constructor(props: CookieInfoProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { onAccept } = this.props;
    if (onAccept) {
      onAccept();
    }
    Cookie.setCookie(true);
  }
  render() {
    const { isOpen, buttonText, classes, children } = this.props;
    const className = classNames({
      [classes.root]: true,
      [classes.rootActive]: isOpen,
    });
    return (
      <div className={className}>
        <div className={classes.content}>{children}</div>

        <Button className={classes.button} onClick={this.handleClick}>
          {buttonText || "OK"}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles as any)(CookieInfo);
