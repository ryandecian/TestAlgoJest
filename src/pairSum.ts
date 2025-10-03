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

/* Documentation :
La fonction pairSumOptimized utilise une approche basée sur une table de hachage (Map) pour trouver deux indices dans un tableau dont les valeurs additionnées donnent une cible spécifique.
*/

/* Exemple d'utilisation :
const tab = [1, 2, 7, 4];
const cible = 5;
const result = pairSumOptimized(tab, cible);
console.log(result); // Affiche [1, 2] car tab[1] + tab[2] = 2 + 7 = 9
*/

/* Les méthodes du .Map :
- set(key: K, value: V): void - Ajoute une paire clé-valeur à la Map.
- get(key: K): V | undefined - Renvoie la valeur associée à la clé, ou undefined si la clé n'existe pas.
- has(key: K): boolean - Renvoie true si la clé existe dans la Map, sinon false.
- delete(key: K): boolean - Supprime la paire clé-valeur de la Map et renvoie true si la clé existait, sinon false.
- clear(): void - Supprime toutes les paires clé-valeur de la Map.
- size: number - Renvoie le nombre de paires clé-valeur dans la Map.
*/