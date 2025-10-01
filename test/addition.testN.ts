import { addition } from "../src/addition";

describe("test1 addition", () => {
    test("Ajout de 1 + 2 pour obtenir 3", () => {
        expect(addition(1, 2)).toBe(3);
    })
})

describe("test2 addition", () => {
    test("Soustraire 10 - 8 pour obtenir 2", () => {
        expect(addition(10, - 8)).toBe(2);
    });
});

// describe ("test3 addition", () => {
//     test("Diviser 960 par 48 pour obtenir 20", () => {
//         expect(addition(960, 48)).toBe(20);
//     });
// });
