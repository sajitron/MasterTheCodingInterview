"use strict";
function hasPairWithSum1(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
function hasPairWithSum2(arr, sum) {
  const mySet = /* @__PURE__ */ new Set();
  for (let num of arr) {
    if (mySet.has(num))
      return true;
    mySet.add(sum - num);
  }
  return false;
}
//# sourceMappingURL=hasPairWithSum.js.map
