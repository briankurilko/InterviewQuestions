import { Graph, Node, unvisitListOfNodes } from "./Graph.js";
import { Queue } from "../StacksAndQueuesQuestions/Queue.js";

function findIfHasPathBreadthFirst(start, end) {
  if (start === null || end === null) {
    return false;
  }
  if (start === end) {
    return true;
  }
  const queue = new Queue();
  start.visited = true;
  queue.add(start);

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();

    for (let n of r.adjacent) {
      if (n.visited === false) {
        n.visited = true;
        if (n === end) {
          return true;
        }
        queue.add(n);
      }
    }
  }
  return false;
}

function findIfHasRouteDepthFirst(start, end) {
  if (start === null || end === null) {
    return false;
  }
  if (start === end) {
    return true;
  }

  start.visited = true;
  let hasRoute = false;
  for (let n of start.adjacent) {
    if (n.visited === false) {
      n.path = n.path.concat(start.path);
      n.path.push(start.data);
      hasRoute = findIfHasRouteDepthFirst(n, end);
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
