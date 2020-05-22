import React, { FunctionComponent, useState } from "react";
import {
  FormControlLabel,
  FormHelperText,
  Switch as MaterialSwitch,
} from "@material-ui/core";
import { Validator } from "../utils/isValid";

type Props = {
  id: string;
  title?: string;
  helperText?: string;
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  validators?: Validator[];
  value?: any;
  onChange?: (...args: any) => any;
};

const Switch: FunctionComponent<Props> = ({
  id,
  title,
  helperText,
  isDisabled,
  className,
  value,
  onChange,
}) => {
  const [valueState, setValueState] = useState(value);

  const onChangeLocal = () => {
    return () => {
      setValueState(!valueState);

      return (
        onChange &&
        onChange({
          target: {
            value: !valueState,
          },
        })
      );
    };
  };

  return (
    <div className={className}>
      <FormControlLabel
        disabled={isDisabled}
        control={
          <MaterialSwitch
            checked={valueState}
            onChange={onChangeLocal()}
            value={id}
            color="primary"
          />
        }
        label={title}
      />

      {helperText && (
        <FormHelperText disabled={isDisabled}>{helperText}</FormHelperText>
      )}
    </div>
  );
};

export default Switch;
