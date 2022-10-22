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

// In this, nodes are storing their incoming edges. This method says "hey, are you dependent on any other nodes?
// If so, store the node you're dependent on as your adjacent node."
function createDependencyGraphBackwards(listOfProjects, listOfDependencies) {
  const graph = { nodes: [] };
  const mapOfNodes = new Map();
  for (let project of listOfProjects) {
    const projectNode = { data: project, adjacent: [] };
    graph.nodes.push(projectNode);
    mapOfNodes.set(projectNode.data, projectNode);
  }
  for (let dependency of listOfDependencies) {
    for (let node of graph.nodes) {
      if (dependency.project2 === node.data) {
        const adjacentNode = mapOfNodes.get(dependency.project1);
        node.adjacent.push(adjacentNode);
      }
    }
  }
  return graph;
}

// "Nodes typically only store their outgoing edges.".
// This method is saying "hey, are any nodes dependent on you? If you, store the node that depends on you as your adjacent node."
function createDependencyGraph(listOfProjects, listOfDependencies) {
  const graph = { nodes: [] };
  const mapOfNodes = new Map();
  for (let project of listOfProjects) {
    const projectNode = { data: project, adjacent: [] };
    graph.nodes.push(projectNode);
    mapOfNodes.set(projectNode.data, projectNode);
  }
  for (let dependency of listOfDependencies) {
    for (let node of graph.nodes) {
      if (dependency.project1 === node.data) {
        const adjacentNode = mapOfNodes.get(dependency.project2);
        node.adjacent.push(adjacentNode);
      }
    }
  }
  return graph;
}

function getBuildOrderSetDepthFirst(
  graph,
  buildOrderArray,
  visited = new Set()
) {
  if (graph.nodes.some((node) => visited.has(node))) {
    throw new Error("Cannot build dependency graph");
  }
  for (let node of graph.nodes) {
    if (!visited.has(node)) {
      visited.add(node);
      if (node.adjacent.length === 0) {
        buildOrderArray.push(node.data);
      } else {
        const nodesToAdd = [];
        for (let adjacent of node.adjacent) {
          if (!visited.has(adjacent)) {
            nodesToAdd.push(adjacent);
          }
        }
        if (nodesToAdd.length !== 0) {
          getBuildOrderSetDepthFirst(
            { nodes: nodesToAdd },
            buildOrderArray,
            visited
          );
        }

        buildOrderArray.push(node.data);
      }
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
  const buildOrderArray = [];
  getBuildOrderSetDepthFirst(graph, buildOrderArray);
  return buildOrderArray;
}

function topologicalSortGraph(graph, lengthOfProjects) {
  // Step 1 of topological sort.
  const order = [];
  // Step 2 of topological sort.
  const processNext = new Queue();

  // Step 3 of topological sort.
  const nodesToInboundCount = new Map();
  for (let node of graph.nodes) {
    for (let adjacent of node.adjacent) {
      if (nodesToInboundCount.has(adjacent)) {
        nodesToInboundCount.set(
          adjacent,
          nodesToInboundCount.get(adjacent) + 1
        );
      } else {
        nodesToInboundCount.set(adjacent, 1);
      }
    }
  }

  // Step 4 of topological sort.
  for (let node of graph.nodes) {
    if (!nodesToInboundCount.has(node)) {
      processNext.add(node);
    }
  }

  // Step 5 of topological sort.
  while (!processNext.isEmpty()) {
    const n = processNext.removeFirst();
    for (let x of n.adjacent) {
      nodesToInboundCount.set(x, nodesToInboundCount.get(x) - 1);
      if (nodesToInboundCount.get(x) === 0) {
        processNext.add(x);
      }
    }
    order.push(n.data);
  }

  // Step 6 of topological sort.
  if (order.length < lengthOfProjects) {
    throw new Error(
      "Circular dependency detected, unable to find build order."
    );
  }
  return order;
}

function getBuildOrderTopologicalSort(listOfProjects, listOfDependencies) {
  const graph = createDependencyGraph(listOfProjects, listOfDependencies);
  return topologicalSortGraph(graph, listOfProjects.length);
}

console.log(
  getBuildOrderDepthFirst(testListOfProjects, testListOfDependencies)
);

console.log(
  getBuildOrderTopologicalSort(testListOfProjects, testListOfDependencies)
);
