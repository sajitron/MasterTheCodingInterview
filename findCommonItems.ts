// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false

// confirm the size of arrays
// ask the data type in arrays
// ask if both arrays will always be sent
// consider modularising code
// look for alternative answers

function checkForCommon(arr1: string[], arr2: string[]): boolean {
  const obj1 = {}
  arr1.forEach(item => {
    if (!obj1[item]) {
      obj1[item] = true
    }
  })
  for (let i of arr2) {
    if (obj1[i]) {
      return true
    }
  }
  return false
}

// console.log(checkForCommon(['a', 'b', 'c', 'x'], ['z', 'y', 'x']))
function containsCommonItems(arr1: string[], arr2: []) {
  return arr1.some(item => arr2.includes(item))
}