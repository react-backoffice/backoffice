import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  primaryButton: {
    color: theme.palette.primary.dark,
  },
})

const ConfirmBranch = ({
  title,
  description,
  open,
  disagreeText,
  agreeText,
  onClose,
  onConfirm,
  classes,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    {title ? (
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    ) : null}

    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        {disagreeText}
      </Button>
      <Button
        onClick={onConfirm}
        color="primary"
        autoFocus
        className={classes.primaryButton}
      >
        {agreeText}
      </Button>
    </DialogActions>
  </Dialog>
)

ConfirmBranch.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  agreeText: PropTypes.string.isRequired,
  disagreeText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ConfirmBranch.defaultProps = {
  title: null,
}

export default withStyles(styles)(ConfirmBranch)
