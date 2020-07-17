import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import indigo from "@material-ui/core/colors/indigo";
import amber from "@material-ui/core/colors/amber";
import AppContainer from "../AppContainer";
import NoMatch from "../NoMatch";
import Page from "./pages";
import General from "./General";
import List from "./pages/list";
import FormPage from "./pages/form";
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

const Container = () => (
  <AppContainer theme={theme}>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Layout>
              <Page {...props} />
              <General {...props} />
            </Layout>
          )}
        />

        <Route
          exact
          path="/list"
          render={(props) => (
            <Layout>
              <List />
            </Layout>
          )}
        />

        <Route
          exact
          path="/form"
          render={(props) => (
            <Layout>
              <FormPage />
            </Layout>
          )}
        />

        <Route
          render={(props) => (
            <Layout>
              <NoMatch />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  </AppContainer>
);
export default Container;
