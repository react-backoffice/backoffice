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
  isOpen,
  disagreeText,
  agreeText,
  hasCloseButton,
  onClose,
  onConfirm,
  classes,
}) => (
  <Dialog
    open={isOpen}
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
      {hasCloseButton ? (
        <Button onClick={onClose} color="primary">
          {disagreeText}
        </Button>
      ) : null}

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
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  agreeText: PropTypes.string.isRequired,
  disagreeText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  hasCloseButton: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ConfirmBranch.defaultProps = {
  title: null,
}

export default withStyles(styles)(ConfirmBranch)
