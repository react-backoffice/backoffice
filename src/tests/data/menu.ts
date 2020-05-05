import BugIcon from "@material-ui/icons/BugReport";

export default [
  {
    type: "link",
    url: "/",
    title: "Dashboard",
    icon: null,
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
    icon: BugIcon,
  },
];
