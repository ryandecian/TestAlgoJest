import FindIndexSplice from "../src/FindIndexSplice";

describe("Test de la fonction splice", () => {
    test(" Suppression de rat", () => {
        const animaux = ["chien", "chat", "rat", "lapin"];
        FindIndexSplice(animaux, "rat");

        expect(animaux).toEqual(["chien", "chat", "lapin"]);
    })
    test(" Remplacement de rat par serpent", () => {
        const animaux = ["chien", "chat", "rat", "lapin"];
        FindIndexSplice(animaux, "rat", 1, "serpent");

        expect(animaux).toEqual(["chien", "chat", "serpent", "lapin"]);
    })
    test(" Ajout de serpent entre rat et lapin", () => {
        const animaux = ["chien", "chat", "rat", "lapin"];
        FindIndexSplice(animaux, "lapin", 0, "serpent");

        expect(animaux).toEqual(["chien", "chat", "rat", "serpent", "lapin"]);
    })
})