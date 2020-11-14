import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { MenuDataItem } from "../Menu/Menu";
import BaseBranch from "./BaseBranch";

type BaseProps = {
  title: string;
  menuOpen?: boolean;
  menuData: MenuDataItem[];
  hasHeader?: boolean;
  isHeaderFixed?: boolean;
};

const Base: FunctionComponent<BaseProps> = ({ menuOpen, ...rest }) => {
  const [isOpen, setIsOpen] = useState(Boolean(menuOpen));
  const history = useHistory();

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
