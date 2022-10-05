import { Graph, Node, unvisitListOfNodes } from "./Graph.js";
import { Queue } from "../StacksAndQueuesQuestions/Queue.js";

function findRouteBetweenNodesBreadthFirst(node1, node2) {
  if (node1 === null || node2 === null) {
    return [];
  }
  if (node1 === node2) {
    return [node1.data];
  }
  const queue = new Queue();
  node1.visited = true;
  queue.add(node1);

  while (!queue.isEmpty()) {
    const r = queue.removeFirst();
    if (r === node2) {
      r.path.push(r.data);
      return r.path;
    }
    for (let n of r.adjacent) {
      if (n.visited === false) {
        n.visited = true;
        n.path = n.path.concat(r.path);
        n.path.push(r.data);
        queue.add(n);
      }
    }
  }
  return [];
}

function findRouteBetweenNodesDepthFirst(node1, node2) {
  if (node1 === null || node2 === null) {
    return [];
  }
  if (node1 === node2) {
    node1.path.push(node1.data);
    return node1.path;
  }

  node1.visited = true;
  let finalPath = [];
  for (let n of node1.adjacent) {
    if (n.visited === false) {
      n.path = n.path.concat(node1.path);
      n.path.push(node1.data);
      finalPath = findRouteBetweenNodesDepthFirst(n, node2);
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
