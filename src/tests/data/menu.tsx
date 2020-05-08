import React from "react";
import BugIcon from "@material-ui/icons/BugReport";
import { MenuDataItem } from "../../Menu/Menu";

const menu: MenuDataItem[] = [
  {
    type: "link",
    url: "/",
    title: "Dashboard",
  },
  {
    type: "link",
    url: "/portfolio",
    title: "New portfolio",
    isDisabled: true,
  },
  {
    type: "divider",
  },
  {
    type: "link",
    url: "/bug",
    title: "Report a bug",
    icon: (
      <>
        <BugIcon />
      </>
    ),
  },
];

export default menu;
