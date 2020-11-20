import React, { FunctionComponent, useState } from "react";
import * as H from "history";
import { MenuDataItem } from "../Menu/Menu";
import BaseBranch from "./BaseBranch";

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
};

const Base: FunctionComponent<BaseProps> = ({ menuOpen, history, ...rest }) => {
  const [isOpen, setIsOpen] = useState(Boolean(menuOpen));

  const redirectTo = (link: string) => {
    history.push(link);
    window.scrollTo(0, 0);
  };

  return (
    <BaseBranch
      {...rest}
      isOpen={isOpen}
      onClick={() => redirectTo("/")}
      onDrawerOpen={() => setIsOpen(true)}
      onDrawerClose={() => setIsOpen(false)}
      redirectTo={redirectTo}
    />
  );
};

export default Base;
