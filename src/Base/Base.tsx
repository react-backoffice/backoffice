import React, { FunctionComponent, useState } from "react";
import * as H from "history";
import classNames from "classnames";
import { MenuDataItem } from "../Menu/Menu";
import Drawer from "../Drawer";
import Header from "../Header";
import useStyles from "./index.styles";

type BaseProps = {
  title: string;
  menuOpen?: boolean;
  menuData: MenuDataItem[];
  hasHeader?: boolean;
  isHeaderFixed?: boolean;
  history:
    | H.History
    | {
        push: (link: string) => void;
        [key: string]: unknown;
      };
  rightContent?: JSX.Element;
};

const Base: FunctionComponent<BaseProps> = ({
  menuOpen,
  history,
  title,
  menuData,
  isHeaderFixed = false,
  rightContent,
  hasHeader = true,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(Boolean(menuOpen));
  const classes = useStyles();

  const redirectTo = (link: string) => {
    history.push(link);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classNames(classes.appFrame)}>
      {hasHeader && (
        <>
          <Header
            title={title}
            onDrawerOpen={() => setIsOpen(true)}
            onClick={() => redirectTo("/")}
            isOpen={isOpen}
            isFixed={isHeaderFixed}
          >
            {rightContent || null}
          </Header>

          <Drawer
            onClose={() => setIsOpen(false)}
            redirectTo={redirectTo}
            isOpen={isOpen}
            data={menuData}
          />
        </>
      )}

      <main
        className={classNames(classes.content, {
          [classes.contentIsOpen]: isOpen || !hasHeader,
          [classes.isHeaderFixed]: isHeaderFixed,
        })}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as any, {
            ...rest,
          }),
        )}
      </main>
    </div>
  );
};

export default Base;
