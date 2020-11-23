import React from "react";
import { Typography } from "@material-ui/core";
import BackButton from "../../BackButton";

import TabsComponent from "../../Tabs";
import tabData from "../data/tabs";

const Tabs = () => {
  return (
    <>
      <BackButton url="/" />

      <Typography variant="h2">Tabs</Typography>

      <TabsComponent data={tabData} />
    </>
  );
};

export default Tabs;
