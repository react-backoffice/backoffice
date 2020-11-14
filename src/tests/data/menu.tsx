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
    url: "/list",
    title: "List",
  },
  {
    type: "link",
    url: "/form",
    title: "Form",
    items: [
      {
        type: "link",
        url: "/form",
        title: "Form Subitem",
      },
      {
        type: "link",
        url: "/form",
        title: "Form Subitem Disabled",
        isDisabled: true,
      },
    ],
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
    icon: <BugIcon />,
  },
];

export default menu;
