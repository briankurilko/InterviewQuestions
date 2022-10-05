import { Graph, Node, unvisitListOfNodes } from "./Graph.js";
import { Queue } from "../StacksAndQueuesQuestions/Queue.js";

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

console.log(findRouteBetweenNodesBreadthFirst(firstNode, sixthNode)); // 1, 2, 4, 6
unvisitListOfNodes([
  firstNode,
  secondNode,
  thirdNode,
  fourthNode,
  fifthNode,
  sixthNode,
]);
console.log(findRouteBetweenNodesDepthFirst(firstNode, sixthNode)); // 1, 2, 3, 5, 6
unvisitListOfNodes([
  firstNode,
  secondNode,
  thirdNode,
  fourthNode,
  fifthNode,
  sixthNode,
]);
console.log(findRouteBetweenNodesDepthFirst(firstNode, new Node(7))); // []
