const isObject = (obj: any): obj is Record<string, any> => {
  return obj === Object(obj);
};

export default isObject;
