export function factorial(n: number) {
    if (n === 0) {
        return (1);
    }
    if (n === 1) {
        return (1);
    }
    else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return (result);
    }
}