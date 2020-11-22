import React from "react";
import ConfirmBranch from "./ConfirmBranch";
type WithConfirmProps = {
  isOpen?: boolean;
  title?: string;
  description: string;
  agreeText?: string;
  disagreeText?: string;
  onConfirm: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
  hasCloseButton?: boolean;
};

type WithConfirmState = {
  isOpen: boolean | undefined;
};

const withConfirm = (Component: any) =>
  class WithConfirm extends React.Component<
    WithConfirmProps,
    WithConfirmState
  > {
    constructor(props: WithConfirmProps) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this.handleClose = this.handleClose.bind(this);
      this.handleConfirm = this.handleConfirm.bind(this);
    }
    componentDidMount() {
      this.setState({
        isOpen: this.props.isOpen,
      });
    }
    UNSAFE_componentWillReceiveProps(nextProps: WithConfirmProps) {
      if (this.state.isOpen !== nextProps.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen,
        });
      }
    }
    handleClose() {
      this.setState({
        isOpen: false,
      });
      this.props.onClose && this.props.onClose();
    }
    handleConfirm() {
      this.setState({
        isOpen: false,
      });
      this.props.onConfirm();
    }
    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onClose={this.handleClose}
          onConfirm={this.handleConfirm}
        />
      );
    }
  };

export default withConfirm(ConfirmBranch);
