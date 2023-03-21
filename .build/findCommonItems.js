"use strict";
function checkForCommon(arr1, arr2) {
  const obj1 = {};
  arr1.forEach((item) => {
    if (!obj1[item]) {
      obj1[item] = true;
    }
  });
  for (let i of arr2) {
    if (obj1[i]) {
      return true;
    }
  }
  return false;
}
function containsCommonItems(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
//# sourceMappingURL=findCommonItems.js.map
