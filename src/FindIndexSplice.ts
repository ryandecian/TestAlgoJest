function FindIndexSplice(
    tab: (number | string)[], 
    value: number | string, 
    deleteTarget : number = 1, 
    ...item: (number | string)[]
): (number | string)[] {

    const test = tab.findIndex((target) => target === value);
    if (test === -1) return [];

    return tab.splice(test, deleteTarget, ...item);
}

export default FindIndexSplice;
