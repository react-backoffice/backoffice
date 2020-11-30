const isObject = (obj: unknown): obj is Record<string, unknown> => {
  return obj === Object(obj);
};

export default isObject;
