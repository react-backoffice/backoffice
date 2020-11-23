import React, { FunctionComponent } from "react";

import DashboardComponent from "../../Dashboard";
import dashboardData from "../data/dashboard";
import BackButton from "../../BackButton";

const Dashboard: FunctionComponent<any> = ({ ...props }) => {
  return (
    <>
      <BackButton url="/" />

      <DashboardComponent data={dashboardData} {...props} />
    </>
  );
};

export default Dashboard;
