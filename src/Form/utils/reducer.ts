import isEqual from "lodash/isEqual";

export type State = Record<string, any> | undefined;
export type Action = {
  type: "UPDATE_FIELD";
  payload: any;
};

const getDataObject = (
  ids: string[],
  value: any,
  existingData: State,
): Record<string, any> => {
  if (ids[1]) {
    return {
      [ids[0]]: getDataObject(ids.slice(1), value, existingData?.[ids[0]]),
    };
  }

  return {
    [ids[0]]: {
      ...existingData?.[ids[0]],
      ...value,
    },
  };
};

const isObject = (obj: any): obj is Record<string, any> => {
  return obj === Object(obj);
};

export const enrichInitialData = (data: Record<string, any>) => {
  const enriched = {};

  Object.entries(data).forEach(([key, value]) => {
    if (isObject(value)) {
      enriched[key] = enrichInitialData(value);
    } else {
      enriched[key] = {
        value,
      };
    }
  });

  return enriched;
};

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "UPDATE_FIELD": {
      if (isEqual(state?.[payload.id], payload.data)) {
        return state;
      }

      const splittedId = payload.id.split(".");

      return {
        ...state,
        ...getDataObject(splittedId, payload.data, state),
      };
    }

    default: {
      throw new Error("Action type not defined");
    }
  }
};

export default reducer;
