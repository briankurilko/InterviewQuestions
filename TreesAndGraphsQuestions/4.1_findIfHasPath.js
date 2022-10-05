import { Graph, Node, unvisitListOfNodes } from "./Graph.js";
import { Queue } from "../StacksAndQueuesQuestions/Queue.js";

function findIfHasPathBreadthFirst(node1, node2) {
  if (node1 === null || node2 === null) {
    return false;
  }
  if (node1 === node2) {
    return true;
  }
  const queue = new Queue();
  node1.visited = true;
  queue.add(node1);

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();
    if (r === node2) {
      return true;
    }
    for (let n of r.adjacent) {
      if (n.visited === false) {
        n.visited = true;
        n.path = n.path.concat(r.path);
        queue.add(n);
      }
    }
  }
  return false;
}

function findIfHasRouteDepthFirst(node1, node2) {
  if (node1 === null || node2 === null) {
    return false;
  }
  if (node1 === node2) {
    return true;
  }

  node1.visited = true;
  let hasRoute = false;
  for (let n of node1.adjacent) {
    if (n.visited === false) {
      n.path = n.path.concat(node1.path);
      n.path.push(node1.data);
      hasRoute = findIfHasRouteDepthFirst(n, node2);
      if (hasRoute) {
        return hasRoute;
      }
    }
  }
  return false;
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

console.log(findIfHasPathBreadthFirst(firstNode, sixthNode)); // 1, 2, 4, 6
unvisitListOfNodes([
  firstNode,
  secondNode,
  thirdNode,
  fourthNode,
  fifthNode,
  sixthNode,
]);
console.log(findIfHasRouteDepthFirst(firstNode, sixthNode)); // 1, 2, 3, 5, 6
unvisitListOfNodes([
  firstNode,
  secondNode,
  thirdNode,
  fourthNode,
  fifthNode,
  sixthNode,
]);
console.log(findIfHasRouteDepthFirst(firstNode, new Node(7))); // []
