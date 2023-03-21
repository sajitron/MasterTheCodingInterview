// Given two arrays of numbers and a sum value, return true if any two numbers in the array sum up to the given some value, and return false otherwise
// Hint - check how sets work

function hasPairWithSum1(arr: number[], sum: number) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      }
    }
  }
  return false
}
// console.log(hasPairWithSum1([1,3,5,5,7], 11))

function hasPairWithSum2(arr: number[], sum: number) {
  const mySet = new Set()
  for (let num of arr) {
    if (mySet.has(num)) return true
    mySet.add(sum - num)
  }
  return false;
}