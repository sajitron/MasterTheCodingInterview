function factorialRecursive(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}


function factorialIterative(n) {
  let answer = 1;
  if (n === 1) return 1;
  for (let i = 1; i <= n; i++) {
    answer *= i
  }

  return answer;
}
