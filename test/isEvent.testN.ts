import { isEven } from "../src/isEven";

describe("Test 1 isEven", () => {
    test("Vérifier si 2 paire et me renvoyer true", () => {
        expect(isEven(2)).toBe(true);
    });
});

describe("Test 2 isEven", () => {
    test("Vérifier si 5 impaire et me renvoyer false", () => {
        expect(isEven(5)).toBe(false);
    });
});

describe("Test 3 isEven", () => {
    test("Vérifier si 0 paire et me renvoyer true", () => {
        expect(isEven(0)).toBe(true);
    });
});