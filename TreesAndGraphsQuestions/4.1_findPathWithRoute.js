import { Graph, Node, unvisitListOfNodes } from "./Graph.js";
import { Queue } from "../StacksAndQueuesQuestions/Queue.js";

// The nodes don't have to store visited/path, you can just create a map of visited/path and either pass it into
// each function call (in depth first) or just create it outside of the scope of the while loop (in breadth first).
function findRouteBetweenNodesBreadthFirst(start, end) {
  if (start === null || end === null) {
    return [];
  }
  if (start === end) {
    return [start.data];
  }
  const queue = new Queue();
  start.visited = true;
  queue.add(start);

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();
    for (let n of r.adjacent) {
      if (n.visited === false) {
        n.visited = true;
        n.path = n.path.concat(r.path);
        n.path.push(r.data);
        if (n === end) {
          n.path.push(n.data);
          return n.path;
        }
        queue.add(n);
      }
    }
  }
  return [];
}

function findRouteBetweenNodesBreadthFirstAndNoSavedDataInNode(start, end) {
  if (start === null || end === null) {
    return [];
  }
  if (start === end) {
    return [start.data];
  }
  const queue = new Queue();
  const mapOfPaths = new Map();
  mapOfPaths.set(start, []);
  queue.add(start);

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();
    for (let n of r.adjacent) {
      if (!mapOfPaths.get(n)) {
        const newPath = [].concat(mapOfPaths.get(r));
        newPath.push(r.data);
        mapOfPaths.set(n, newPath);
        if (n === end) {
          mapOfPaths.get(n).push(n.data);
          return mapOfPaths.get(n);
        }
        queue.add(n);
      }
    }
  }
  return [];
}

function findRouteBetweenNodesDepthFirst(start, end) {
  if (start === null || end === null) {
    return [];
  }
  if (start === end) {
    start.path.push(start.data);
    return start.path;
  }

  start.visited = true;
  let finalPath = [];
  for (let n of start.adjacent) {
    if (n.visited === false) {
      n.path = n.path.concat(start.path);
      n.path.push(start.data);
      finalPath = findRouteBetweenNodesDepthFirst(n, end);
      if (finalPath.length !== 0) {
        return finalPath;
      }
    }
  }
  return [];
}

function findRouteBetweenNodesDepthFirstNoSavedDataInNode(
  start,
  end,
  mapOfPaths = new Map()
) {
  if (start === null || end === null) {
    return [];
  }

  if (start === end) {
    return mapOfPaths.get(start);
  }

  if (!mapOfPaths.get(start)) {
    mapOfPaths.set(start, [start.data]);
  }

  let finalPath = [];
  for (let n of start.adjacent) {
    if (!mapOfPaths.get(n)) {
      const newPath = [].concat(mapOfPaths.get(start));
      newPath.push(n.data);
      mapOfPaths.set(n, newPath);
      finalPath = findRouteBetweenNodesDepthFirstNoSavedDataInNode(
        n,
        end,
        mapOfPaths
      );
      if (finalPath.length !== 0) {
        return finalPath;
      }
    }
  }
  return [];
}

const firstNode = new Node(1);
const secondNode = new Node(2);
const thirdNode = new Node(3);
const fourthNode = new Node(4);
const fifthNode = new Node(5);
const sixthNode = new Node(6);

const createDirectedGraph = () => {
  const graph = new Graph();

  firstNode.adjacent.push(secondNode);
  secondNode.adjacent.push(thirdNode);
  secondNode.adjacent.push(fourthNode);
  fourthNode.adjacent.push(fifthNode);
  fifthNode.adjacent.push(thirdNode);
  fifthNode.adjacent.push(sixthNode);
  thirdNode.adjacent.push(fifthNode);
  fourthNode.adjacent.push(sixthNode);
  graph.nodes.push(firstNode);
  graph.nodes.push(sixthNode);

  return graph;
};

const graph = createDirectedGraph();

// console.log(findRouteBetweenNodesBreadthFirst(firstNode, sixthNode)); // 1, 2, 4, 6
// unvisitListOfNodes([
//   firstNode,
//   secondNode,
//   thirdNode,
//   fourthNode,
//   fifthNode,
//   sixthNode,
// ]);
// console.log(findRouteBetweenNodesDepthFirst(firstNode, sixthNode)); // 1, 2, 3, 5, 6
// unvisitListOfNodes([
//   firstNode,
//   secondNode,
//   thirdNode,
//   fourthNode,
//   fifthNode,
//   sixthNode,
// ]);
// console.log(findRouteBetweenNodesDepthFirst(firstNode, new Node(7))); // []
// unvisitListOfNodes([
//   firstNode,
//   secondNode,
//   thirdNode,
//   fourthNode,
//   fifthNode,
//   sixthNode,
// ]);

// console.log(
//   findRouteBetweenNodesBreadthFirstAndNoSavedDataInNode(firstNode, sixthNode) // 1, 2, 4, 6
// );
console.log(
  findRouteBetweenNodesDepthFirstNoSavedDataInNode(firstNode, sixthNode) // 1, 2, 3, 5, 6
);
