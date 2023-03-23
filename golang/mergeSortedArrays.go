func mergeSortedArrays(arr1 []int{}, arr2 []int{}) []int{} {
  // cap method helps us get the length of an array/slice
  merged := append(arr1, arr2...) // we can't concatenate more than two slices at once
  sort.Ints(merged[:])
  return merged  
}