function fibonacciOne(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let now = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + now;
    prev = now;
    now = next;
  }

  return now;
}

export default fibonacciOne;
