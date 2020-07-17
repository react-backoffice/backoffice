import React from "react";
import BaseBranch from "./BaseBranch";

type WithBaseProps = {
  title: string;
  menuOpen?: boolean;
  menuData: object[];
  rightContent?: React.ReactNode;
  isHeaderFixed?: boolean;
  hasHeader?: boolean;
  history?: {
    [key: string]: any;
  };
};

type WithBaseState = {
  open: boolean | undefined;
};

const withBase = (Component: any) =>
  class WithBase extends React.Component<WithBaseProps, WithBaseState> {
    constructor(props: WithBaseProps) {
      super(props);
      this.state = {
        open: false,
      };
      this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
      this.handleDrawerClose = this.handleDrawerClose.bind(this);
      this.redirectTo = this.redirectTo.bind(this);
      this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
      const { menuOpen } = this.props;
      this.setState({
        open: menuOpen,
      });
    }
    UNSAFE_componentWillReceiveProps({ menuOpen }: WithBaseProps) {
      this.setState({
        open: menuOpen,
      });
    }
    onClick() {
      this.redirectTo("/");
    }
    handleDrawerOpen() {
      this.setState({
        open: true,
      });
    }
    handleDrawerClose() {
      this.setState({
        open: false,
      });
    }
    redirectTo(link: string) {
      const { history } = this.props;
      if (history) {
        history.push(link);
      }
    }

    render() {
      const { rightContent } = this.props;
      return (
        <Component
          {...this.props}
          {...this.state}
          onClick={this.onClick}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
          redirectTo={this.redirectTo}
          rightContent={rightContent}
        />
      );
    }
  };
const WithBase = withBase(BaseBranch);
export default WithBase;
