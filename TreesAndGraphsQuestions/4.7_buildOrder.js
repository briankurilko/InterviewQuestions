class Dependency {
  constructor(project1, project2) {
    this.project1 = project1;
    // project 2 is dependent on project 1. Directed graph.
    this.project2 = project2;
  }
}

const testListOfProjects = ["a", "b", "c", "d", "e", "f"];

const testListOfDependencies = [
  new Dependency("a", "d"),
  new Dependency("f", "b"),
  new Dependency("b", "d"),
  new Dependency("f", "a"),
  new Dependency("d", "c"),
  new Dependency("c", "e"),
  // new Dependency("c", "d"),
];

function createDependencyGraph(listOfProjects, listOfDependencies) {
  const graph = { nodes: [] };
  for (let project of listOfProjects) {
    const projectNode = { data: project, adjacent: [] };
    graph.nodes.push(projectNode);
  }
  for (let dependency of listOfDependencies) {
    for (let node of graph.nodes) {
      if (dependency.project2 === node.data) {
        const adjacentNode = graph.nodes.find(
          (node) => node.data === dependency.project1
        );
        node.adjacent.push(adjacentNode);
      }
    }
  }
  return graph;
}

function getBuildOrderSet(graph, buildOrderSet, visited = new Set()) {
  if (graph.nodes.some((node) => visited.has(node))) {
    throw new Error("Cannot build graph");
  }
  for (let node of graph.nodes) {
    visited.add(node);
    if (node.adjacent.length === 0) {
      buildOrderSet.add(node.data);
    } else {
      const nodesToAdd = [];
      for (let adjacent of node.adjacent) {
        if (!buildOrderSet.has(adjacent.data)) {
          nodesToAdd.push(adjacent);
        }
      }
      if (nodesToAdd.length !== 0) {
        getBuildOrderSet({ nodes: nodesToAdd }, buildOrderSet, visited);
      }

      buildOrderSet.add(node.data);
    }
  }
}

// I think this is O(n) time, O(n) space.
function getBuildOrder(listOfProjects, listOfDependencies) {
  const graph = createDependencyGraph(listOfProjects, listOfDependencies);
  const buildOrderSet = new Set();
  getBuildOrderSet(graph, buildOrderSet);
  return [...buildOrderSet];
}

console.log(getBuildOrder(testListOfProjects, testListOfDependencies));
