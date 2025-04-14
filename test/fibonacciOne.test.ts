import fibonacciOne from "../src/fibonacciOne";

describe("Test de fibonacciOne", () => {
    test("Vérifier si en passant n = 0, le résultat est 0", () => {
        expect(fibonacciOne(0)).toBe(0);
    });
    test("Vérifier si en passant n = 1, le résultat est 1", () => {
        expect(fibonacciOne(1)).toBe(1);
    });
    test("Vérifier si en passant n = 2, le résultat est 1", () => {
        expect(fibonacciOne(2)).toBe(1);
    });
    test("Vérifier si en passant n = 10, le résultat est 55", () => {
        expect(fibonacciOne(10)).toBe(55);
    });
});