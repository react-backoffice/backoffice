import React, { FunctionComponent } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  withStyles,
  Tabs as MaterialTabs,
  Tab,
  Typography,
} from "@material-ui/core";

const TabContainer: FunctionComponent<any> = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing() * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

type TabsProps = {
  isScrollable?: boolean;
  data: Record<string, any>[];
  classes: {
    [key: string]: string;
  };
};

type TabsState = {
  value?: number;
};

class Tabs extends React.Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    value: 0,
  };

  componentDidMount() {
    const { data } = this.props;
    const hash = window.location.hash.replace("#/", "");
    let value = 0;

    if (data && data.constructor === Array) {
      data.forEach((item, index) => {
        if (item.id === hash) {
          value = index;
        }
      });
    }

    this.setState({
      value,
    });
  }

  handleChange(event: any, value: any) {
    const hash = this.props.data[value].id || value;
    window.location.hash = `#/${hash}`;
    this.setState({ value });
  }

  render() {
    const { isScrollable, data, classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <MaterialTabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            variant={isScrollable ? "scrollable" : undefined}
            scrollButtons="auto"
          >
            {data.map((item, index) => (
              <Tab key={`tab-${index}`} label={item.title} />
            ))}
          </MaterialTabs>
        </AppBar>

        {data.map((item, index) => {
          if (value === index) {
            return (
              <TabContainer key={`tabcontainer-${index}`}>
                {item.content}
              </TabContainer>
            );
          }
          return null;
        })}
      </div>
    );
  }
}
const tabsWithStyles = withStyles(styles)(Tabs);

export default withRouter(tabsWithStyles as any) as any;
