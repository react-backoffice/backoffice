import React from "react";
import { withRouter } from "react-router-dom";
import BackButtonBranch from "./BackButtonBranch";

type WithBackButtonProps = {
  url: string;
  history: {
    [key: string]: any;
  };
};

const withBackButton = (Component: any) =>
  class WithBackButton extends React.Component<WithBackButtonProps, {}> {
    constructor(props: WithBackButtonProps) {
      super(props);
      this.handleBack = this.handleBack.bind(this);
    }
    handleBack() {
      const { url, history } = this.props;
      history.push(url);
    }
    render() {
      return <Component {...this.props} onNavigateBack={this.handleBack} />;
    }
  };

const BackButton = withBackButton(BackButtonBranch);

export default withRouter(BackButton as any) as any;
