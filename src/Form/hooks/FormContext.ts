import React from "react";
import { Action, State } from "./reducer";

const FormContext = React.createContext<{
  dispatch: (action: Action) => void;
  state: State;
}>({
  state: undefined,
  dispatch: () => undefined,
});

export default FormContext;
