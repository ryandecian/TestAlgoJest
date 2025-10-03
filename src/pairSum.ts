/* Méthode naive */
export function pairSum(nums: number[], target: number): [number, number] | null {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

/* Documentation : 
La fonction pairSum prend un tableau de nombres et un nombre cible a atteindre
Elle retourne l'emplacement des deux nombres dans le tableau qui additionnés donnent la cible
Si aucun couple n'est trouvé, elle retourne null

Exemple d'utilisation :
const nums = [2, 7, 11, 15];
const target = 9;
const result = pairSum(nums, target);
console.log(result); // Affiche [0, 1] car nums[0] + nums[1] = 2 + 7 = 9
*/

const tab = [1, 2, 7, 4]
const cible = 5

export function pairSumOptimized( tab: number[], cible: number) {
    const map = new Map<number, number>(); /* Clé : valeur de l'index, Valeur : l'index ou position dans le tableau */

    for (let i = 0; i < tab.length; i++) {
        const x: number = tab[i]; /* Valeur de l'index. Ex : Si i = 0 alors x = 1 */
        const result: number = cible - x; /* Résultat de la cible - la valeur de l'index */

        if (map.has(result)) {
            return [map.get(result) as number, i];
        }
        map.set(x, i) /* On ajoute la valeur de l'index et sa position dans le tableau */
    }
    return null;
}