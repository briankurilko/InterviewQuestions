import { Queue } from "../StacksAndQueuesQuestions/Queue.js";
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

function createDependencyGraphBackwards(listOfProjects, listOfDependencies) {
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

function createDependencyGraph(listOfProjects, listOfDependencies) {
  const graph = { nodes: [] };
  for (let project of listOfProjects) {
    const projectNode = { data: project, adjacent: [] };
    graph.nodes.push(projectNode);
  }
  for (let dependency of listOfDependencies) {
    for (let node of graph.nodes) {
      if (dependency.project1 === node.data) {
        const adjacentNode = graph.nodes.find(
          (node) => node.data === dependency.project2
        );
        node.adjacent.push(adjacentNode);
      }
    }
  }
  return graph;
}

function getBuildOrderSetDepthFirst(graph, buildOrderSet, visited = new Set()) {
  if (graph.nodes.some((node) => visited.has(node))) {
    throw new Error("Cannot build dependency graph");
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
        getBuildOrderSetDepthFirst(
          { nodes: nodesToAdd },
          buildOrderSet,
          visited
        );
      }

      buildOrderSet.add(node.data);
    }
  }
}

function getBuildOrderSetNoRecursion(graph) {
  const buildOrderSet = new Set();
  for (let i = 0; i < graph.nodes.length; ++i) {
    for (let j = 0; j < graph.nodes.length; ++j) {
      if (graph.nodes[j].adjacent.length === 0) {
        buildOrderSet.add(graph.nodes[j].data);
        const nodeToDelete = graph.nodes[j];
        for (let node of graph.nodes) {
          node.adjacent = node.adjacent.filter(
            (current) => current !== nodeToDelete
          );
        }
      }
    }
  }
  for (let node of graph.nodes) {
    if (node.adjacent.length > 0) {
      throw new Error("Cannot build dependency graph");
    }
  }
  return buildOrderSet;
}

// I think this is O(n^3) time, O(n) space, since we loop through all adjacent nodes of each node multiple times.
function getBuildOrder(listOfProjects, listOfDependencies) {
  const graph = createDependencyGraphBackwards(
    listOfProjects,
    listOfDependencies
  );
  const buildOrderSet = new Set();
  return [...getBuildOrderSetNoRecursion(graph, buildOrderSet)];
}

// I think this is O(n) time, O(n) space, since we shouldn't visit nodes more than once.
function getBuildOrderDepthFirst(listOfProjects, listOfDependencies) {
  const graph = createDependencyGraphBackwards(
    listOfProjects,
    listOfDependencies
  );
  const buildOrderSet = new Set();
  getBuildOrderSetDepthFirst(graph, buildOrderSet);
  return [...buildOrderSet];
}

function topologicalSortGraph(graph) {
  const order = new Set();
  const processNext = new Queue();
  const nodesToInboundCount = new Map();
  for (let node of graph.nodes) {
    for (let adjacent of node.adjacent) {
      if (nodesToInboundCount.has(adjacent)) {
        nodesToInboundCount.set(adjacent, nodesToInboundCount.get(adjacent) + 1);
      } else {
        nodesToInboundCount.set(adjacent, 1);
      }
    }
  }

  for (let node of graph.nodes) {
    if (!nodesToInboundCount.has(node)) {
      processNext.add(node);
    }
  }

  while (!processNext.isEmpty()) {
    const n = processNext.removeFirst();
    for (let x of n.adjacent) {
      nodesToInboundCount.set(x, nodesToInboundCount.get(x) - 1);
      if (nodesToInboundCount.get(x) === 0) {
        processNext.add(x);
      }
    }
    order.add(n.data);
  }
  return [...order];
}

function getBuildOrderTopologicalSort(listOfProjects, listOfDependencies) {
  const graph = createDependencyGraph(listOfProjects, listOfDependencies);
  return topologicalSortGraph(graph);
}

// console.log(
//   getBuildOrderDepthFirst(testListOfProjects, testListOfDependencies)
// );
// console.log(getBuildOrder(testListOfProjects, testListOfDependencies));

console.log(
  getBuildOrderTopologicalSort(testListOfProjects, testListOfDependencies)
);
