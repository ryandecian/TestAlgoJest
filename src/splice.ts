function splice(
    a: (string | number)[],
    b: number, /** Index */
    c: number, /** Combien a supprimer ? */
    ...item: (string | number)[]
): (string | number)[] {
    return (
        a.splice(b, c, ...item)
    );
}

export default splice;
