import { factorial } from "../src/factorial"

describe("Test de factorial", () => {
    test("Vérifier si en passant n = 1, le résultat est 1", () => {
        expect(factorial(1)).toBe(1);
    });
    test("Vérifier si en passant n = 2, le résultat est 2", () => {
        expect(factorial(2)).toBe(2);
    });
    test("Vérifier si en passant n = 0, le résultat est 0", () => {
        expect(factorial(0)).toBe(1);
    });
    test("Vérifier si en passant n = 5, le résultat est 120", () => {
        expect(factorial(5)).toBe(120);
    });
    test("Vérifier si en passant n = 20, le résultat est 2432902008176640000", () => {
        expect(factorial(20)).toBe(2432902008176640000);
    });
});