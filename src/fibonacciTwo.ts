function fibonacciMemo(): (n: number) => number {
    const memo: Record<number, number> = {};
  
    function fib(n: number): number {
      if (n <= 0) return 0;
      if (n === 1) return 1;
  
      if (memo[n] !== undefined) {
        return memo[n];
      }
  
      memo[n] = fib(n - 1) + fib(n - 2);
      return memo[n];
    }
  
    return fib;
}

const fibonacciTwo = fibonacciMemo();

export default fibonacciTwo;
