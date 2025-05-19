function bestSumRecursiv(target: number, numbers: number[], memo: { [key: number]: number[] | null } = {}): number[] | null {
  
  // Cas mémorisé ?
  if (target in memo) return memo[target];

  // 🟢 Cas de base : cible atteinte
  if (target === 0) return [];

  // 🔴 Cas impossible : cible négative
  if (target < 0) return null;


  // On initialise la plus courte solution trouvée
  let shortestCombination: number[] | null = null;

  // On parcourt chaque nombre
  for (const num of numbers) {
    const remainder = target - num;
    const result = bestSumRecursiv(remainder, numbers, memo);

    // ✅ Si une combinaison est trouvée pour le reste
    if (result !== null) {
      const combination = [...result, num];

      // 🧪 On garde la plus courte combinaison
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  // 🧠 Mémorisation de la solution trouvée (même si null)
  memo[target] = shortestCombination;

  return shortestCombination;
}
