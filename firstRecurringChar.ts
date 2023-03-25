// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2
function findFirstRecurring(arr: number[]): number {
  let map = {}
  for(let num of arr) {
    if (map[num]) return num;
    map[num] = true;
  }
}