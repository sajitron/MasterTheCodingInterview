"use strict";
function findFirstRecurring(arr) {
  let map = {};
  for (let num of arr) {
    if (map[num])
      return num;
    map[num] = true;
  }
}
//# sourceMappingURL=firstRecurringChar.js.map
