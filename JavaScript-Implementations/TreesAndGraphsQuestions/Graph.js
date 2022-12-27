export class Graph {
  constructor() {
    this.nodes = [];
  }
}

export class Node {
  constructor(data = null) {
    this.data = data;
    this.adjacent = [];
    this.path = [];
    this.visited = false;
  }
}

export function unvisitListOfNodes(nodes) {
  for (let node of nodes) {
    node.visited = false;
    node.path = [];
  }
}
