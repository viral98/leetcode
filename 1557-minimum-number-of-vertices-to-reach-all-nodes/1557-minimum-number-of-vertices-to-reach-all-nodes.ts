function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const degree = Array(n).fill(0);
    const output = [];
    edges.forEach(([u, v]) => degree[v]++);
    degree.forEach((deg, i) => !deg && output.push(i));
    return output;
};