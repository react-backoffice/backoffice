import React from "react";
import Walls from "walls";
import indigo from "@material-ui/core/colors/indigo";
import amber from "@material-ui/core/colors/amber";
import AppContainer from "../AppContainer";
import NoMatch from "../NoMatch";
import Page from "./pages";
import General from "./General";
import List from "./pages/list";
import FormPage from "./pages/form";
import Dashboard from "./pages/dashboard";
import TabsPage from "./pages/tabs";
import Layout from "./Layout";

const theme = {
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
    },
  },
};

const routes = [
  {
    exact: true,
    path: "/",
    render: (props: any) => (
      <Layout>
        <Page {...props} />
        <General {...props} />
      </Layout>
    ),
  },
  {
    exact: true,
    path: "/dashboard",
    render: (props: any) => (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    exact: true,
    path: "/list",
    render: (props: any) => (
      <Layout>
        <List />
      </Layout>
    ),
  },
  {
    exact: true,
    path: "/form",
    render: (props: any) => (
      <Layout>
        <FormPage />
      </Layout>
    ),
  },
  {
    exact: true,
    path: "/tabs",
    render: (props: any) => (
      <Layout>
        <TabsPage />
      </Layout>
    ),
  },
  {
    render: (props: any) => (
      <Layout>
        <NoMatch />
      </Layout>
    ),
  },
];

const Container = () => (
  <AppContainer theme={theme}>
    <Walls routes={routes} />
  </AppContainer>
);
export default Container;
