import React from 'react'
import PropTypes from 'prop-types'

import {
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@material-ui/core'

class FormFieldSwitch extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    helperText: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    isDisabled: PropTypes.bool,
  }

  static defaultProps = {
    helperText: null,
    classNames: [],
    isDisabled: false,
  }

  state = {
    value: false,
  }

  handleChange(id) {
    const func = this.props.handleChange(id)

    return () => {
      const newValue = !this.state.value

      this.setState({
        value: newValue,
      })

      return func({
        target: {
          value: newValue,
        },
      })
    }
  }

  render() {
    const {
      id,
      title,
      helperText,
      isDisabled,
      classNames,
    } = this.props

    return (
      <div className={classNames.join(' ')}>
        <FormControlLabel
          disabled={isDisabled}
          control={
            <Switch
              checked={this.state.value}
              onChange={this.handleChange(id)}
              value={id}
              color="primary"
            />
          }
          label={title}
        />

        {helperText ? (
          <FormHelperText
            disabled={isDisabled}
          >
            {helperText}
          </FormHelperText>
        ) : null}
      </div>
    )
  }
}

export default FormFieldSwitch
