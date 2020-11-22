import { makeStyles, Theme } from "@material-ui/core";
import { DRAWER_WIDTH } from "../Drawer";

const useStyles = makeStyles((theme: Theme) => ({
  "@global html": {
    scrollBehavior: "smooth",
  },

  "@global a, a:link": {
    color: theme.palette.secondary.main,
  },

  appFrame: {
    display: "flex",
  },

  content: {
    width: `calc(100vw - ${theme.spacing(3 * 2)}px)`,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "calc(100% - 56px)",
  },

  contentIsOpen: {
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    paddingLeft: DRAWER_WIDTH,
  },

  isHeaderFixed: {
    marginTop: theme.spacing(8),
  },
}));

export default useStyles;
