function mergeSortedArrays(arr1: number[], arr2: number[]) {
  return arr1.concat(arr2).sort((a, b) => a - b) 
}