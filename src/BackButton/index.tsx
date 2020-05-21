import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBackIos";

type Props = {
  url: string;
};

const BackButton: FunctionComponent<Props> = ({ url }) => {
  const history = useHistory();

  return (
    <Button
      onClick={() => {
        history.push(url);
      }}
      variant="outlined"
      startIcon={<BackIcon />}
    >
      Back
    </Button>
  );
};

export default BackButton;
