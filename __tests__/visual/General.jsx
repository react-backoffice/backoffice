import React, { Fragment } from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button/Button'

import CookieInfo from '../../CookieInfo'
import Confirm from '../../Confirm/Confirm'

class General extends React.Component {
  constructor() {
    super()

    this.state = {
      dialogOpen: false,
    }

    this.handleOpenDialoge = this.handleOpenDialoge.bind(this)
  }

  handleOpenDialoge() {
    this.setState({
      dialogOpen: true,
    })
  }

  render() {
    return (
      <Fragment>
        <CookieInfo>
          <Typography type="body1">
            This is the cookie info
          </Typography>
        </CookieInfo>

        <Button onClick={this.handleOpenDialoge}>Open Dialog</Button>
        <Confirm
          open={this.state.dialogOpen}
          description="Are you sure you want to delete the entry?"
          onConfirm={() => {}}
        />
      </Fragment>
    )
  }
}

export default General
