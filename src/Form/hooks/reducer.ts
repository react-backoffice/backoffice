import isEqual from "lodash/isEqual";

export type State = Record<string, any> | undefined;
export type Action = {
  type: "SEED" | "UPDATE_FIELD";
  payload: any;
};

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "UPDATE_FIELD": {
      if (isEqual(state?.[payload.id], payload.data)) {
        return state;
      }

      return {
        ...state,
        [payload.id]: {
          ...payload.data,
        },
      };
    }

    case "SEED": {
      state = payload;

      return state;
    }

    default: {
      throw new Error("Action type not defined");
    }
  }
};

export default reducer;
