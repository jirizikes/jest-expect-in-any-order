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
  const sortedObj1 = sortDeep(obj1);
  const sortedObj2 = sortDeep(obj2);
  if (!isEqual(sortedObj1, sortedObj2)) {
    const diffResult = getObjectDiff(sortedObj1, sortedObj2);
    const diffString = diffResult.map((diffKey: any) => {
      return  {
        "name": diffKey,
        "obj1": obj1[diffKey],
        "obj2": obj2[diffKey],
      };
    });

    throw new Error("Not same -> " + JSON.stringify(diffString));
  }
};

const getObjectDiff = function (obj1: any, obj2: any) {
  return Object.keys(obj1).reduce((result: any, key: any) => {
    if (!obj2.hasOwnProperty(key)) {
      result.push(key);
    } else if (isEqual(obj1[key], obj2[key])) {
      const resultKeyIndex = result.indexOf(key);
      result.splice(resultKeyIndex, 1);
    }
    return result;
  }, Object.keys(obj2));
}
