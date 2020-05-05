import React, { Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import CookieInfo from "../CookieInfo";
import Confirm from "../Confirm";

type GeneralState = {
  dialogOpen: boolean;
};

class General extends React.Component<{}, GeneralState> {
  constructor(props: any) {
    super(props);

    this.state = {
      dialogOpen: false,
    };
    this.handleOpenDialoge = this.handleOpenDialoge.bind(this);
  }
  handleOpenDialoge() {
    this.setState({
      dialogOpen: true,
    });
  }

  render() {
    const { dialogOpen } = this.state;
    return (
      <Fragment>
        <CookieInfo {...this.props}>
          <Typography variant="body2">This is the cookie info</Typography>
        </CookieInfo>

        <Typography variant="h4">Confirm</Typography>
        <Button onClick={this.handleOpenDialoge}>Open Dialog</Button>
        <Confirm
          isOpen={dialogOpen}
          description="Are you sure you want to delete the entry?"
          onConfirm={() => {}}
        />
      </Fragment>
    );
  }
}

export default General;
