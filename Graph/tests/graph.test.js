import { describe, it, expect } from 'vitest';
import Graph from '../pre/graph.js';

/**
 * A - B - D
 * |      / \
 * C - - E - F
 *
 * DFS(Iterative): A-C-E-F-D-B
 * DFS(Recursive): A-B-D-E-C-F
 * BFS: A-B-C-D-E-F
 */
function buildGraph() {
  const g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');
  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');
  return g;
}

describe('Test Graph 2', () => {
  it('Check iterative DFS List', () => {
    const g = buildGraph();
    expect(g.DFSIterative('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
  });

  it('Check recursive DFS List', () => {
    const g = buildGraph();
    expect(g.DFS('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('Check BFS List', () => {
    const g = buildGraph();
    expect(g.BFS('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

  /**
   * After removing B:
   * A       D
   * |      / \
   * C - - E - F
   *
   * DFS(Iterative): A-C-E-F-D
   * DFS(Recursive): A-C-E-D-F
   * BFS: A-C-E-D-F
   */
  it('Check iterative DFS List after removing vertex B', () => {
    const g = buildGraph();
    g.removeVertex('B');
    expect(g.DFSIterative('A')).toEqual(['A', 'C', 'E', 'F', 'D']);
  });

  it('Check recursive DFS List after removing vertex B', () => {
    const g = buildGraph();
    g.removeVertex('B');
    expect(g.DFS('A')).toEqual(['A', 'C', 'E', 'D', 'F']);
  });

  it('Check BFS List after removing vertex B', () => {
    const g = buildGraph();
    g.removeVertex('B');
    expect(g.BFS('A')).toEqual(['A', 'C', 'E', 'D', 'F']);
  });

  it('traversal from an isolated vertex (no edges) returns just that vertex', () => {
    const g = new Graph();
    g.addVertex('X');
    expect(g.BFS('X')).toEqual(['X']);
    expect(g.DFS('X')).toEqual(['X']);
    expect(g.DFSIterative('X')).toEqual(['X']);
  });

  it('removing a non-existent vertex does not corrupt the graph', () => {
    const g = buildGraph();
    g.removeVertex('Z');
    expect(g.BFS('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
