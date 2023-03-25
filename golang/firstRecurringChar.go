// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2

func firstRecurringChar(arr: int[]) int {
  newMap := make(map[int]bool)

  for _, num := range arr {
    if newMap[num] {
      return num
    }
    newMap[num] = true
  }
  return nil
}