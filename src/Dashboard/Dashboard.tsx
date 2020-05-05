import React from "react";
import { withRouter } from "react-router-dom";
import DashboardBranch from "./DashboardBranch";
type WithDashboardProps = {
  history: {
    [key: string]: any;
  };
};
const withDashboard = (Component: any) =>
  class WithDashboard extends React.Component<WithDashboardProps, {}> {
    constructor(props: WithDashboardProps) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(url: string) {
      this.props.history.push(url);
    }
    render() {
      return <Component {...this.props} onClick={this.handleClick} />;
    }
  };
const Dashboard = withDashboard(DashboardBranch);
export default withRouter(Dashboard as any) as any;
