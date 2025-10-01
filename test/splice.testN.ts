import splice from "../src/splice";

const abc = ["chien", "chat", "rat", "lapin"]

describe("Test de la fonction splice", () => {
    test(" Suppression de rat", () => {
        const animaux = ["chien", "chat", "rat", "lapin"];
        splice(animaux, 2, 1);

        expect(animaux).toEqual(["chien", "chat", "lapin"]);
    })
    test(" Remplacement de rat par serpent", () => {
        const animaux = ["chien", "chat", "rat", "lapin"];
        splice(animaux, 2, 1, "serpent");

        expect(animaux).toEqual(["chien", "chat", "serpent", "lapin"]);
    })
    test(" Ajout de serpent entre rat et lapin", () => {
        const animaux = ["chien", "chat", "rat", "lapin"];
        splice(animaux, 3, 0, "serpent");

        expect(animaux).toEqual(["chien", "chat", "rat", "serpent", "lapin"]);
    })
})