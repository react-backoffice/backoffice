import React, { FunctionComponent, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Confirm from "../Confirm";

type Props = {
  location: any;
  history: any;
};

const General: FunctionComponent<Props> = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Typography variant="h4">Confirm</Typography>

      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>

      <Confirm
        isOpen={dialogOpen}
        description="Are you sure you want to delete the entry?"
        onConfirm={() => {}}
      />
    </>
  );
};

export default General;
