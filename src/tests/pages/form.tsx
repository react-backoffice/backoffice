import React from "react";
import { Typography, makeStyles, Theme, Button } from "@material-ui/core";
import Form from "../../Form";
import formData from "../data/form";
import BackButton from "../../BackButton";

const useStyles = makeStyles((theme: Theme) => ({
  headline: {
    marginTop: theme.spacing(4),
  },
}));

const FormPage = () => {
  const classes = useStyles();

  return (
    <>
      <BackButton url="/" />

      <Typography variant="h4" className={classes.headline}>
        Form
      </Typography>

      <Form
        data={{
          text: "prefilled text-field",
          id: "test-id",
          select: {
            first: "Bar",
            second: "Foo",
          },
        }}
        form={formData}
        onSubmit={console.log}
        submitText="Save the form"
      >
        <Typography>
          This is a very special form with additional content.
        </Typography>

        <Button>Change First Field Value Via Function</Button>
      </Form>
    </>
  );
};

export default FormPage;
