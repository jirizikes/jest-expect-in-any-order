import { mapValues } from "lodash";
import { isEqual } from "lodash";

const sortDeep = (object: any): any => {
  const sortAny = require("sort-any");

  if (!Array.isArray(object)) {
    if (!(typeof object === "object") || object === null) {
      return object;
    }

    return mapValues(object, sortDeep);
  }

  return sortAny(object.map(sortDeep));
};

export const expectInAnyOrder = (obj1: any, obj2: any) => {
  if (!isEqual(sortDeep(obj1), sortDeep(obj2))) {
    throw new Error("Not same");
  }
};
