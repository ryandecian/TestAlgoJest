import { pairSumOptimized } from "../src/pairSum";

describe("Test de la fonction pairSum", () => {
    test(" Trouver les indices de deux nombres qui additionnés donnent la cible", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(pairSumOptimized(nums, target)).toEqual([0, 1]);
    })
})