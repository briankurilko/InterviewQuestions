class TreeNode {
  constructor(data) {
    this.data = data;
    this.size = 1;
    this.left = null;
    this.right = null;
  }

  getData() {
    return this.data;
  }

  getSize() {
    return this.size;
  }

  insertInOrder(d) {
    if (d <= this.getData) {
      if (this.left === null) {
        this.left = new TreeNode(d);
      } else {
        this.left.insertInOrder(d);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(d);
      } else {
        this.right.insertInOrder(d);
      }
    }
    this.size++;
  }

  getIthNode(i) {
    const leftSize = this.left === null ? 0 : this.left.getSize();
    if (i < leftSize) {
      return this.left.getIthNode(i);
    } else if (i === leftSize) {
      return this;
    } else {
      // Skipping over leftSize + 1 nodes, so subtract them.
      return this.right.getIthNode(i - (leftSize + 1));
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  size() {
    return this.root === null ? 0 : this.root.getSize();
  }

  insertInOrder(d) {
    if (this.root === null) {
      this.root = new TreeNode(d);
    } else {
      this.root.insertInOrder(d);
    }
  }

  getRandomNode() {
    if (this.root === null) {
      return null;
    }
    const randomInt = Math.floor(Math.random() * this.size());
    return this.root.getIthNode(randomInt);
  }
}

const myTree = new Tree();
myTree.insertInOrder(4);
myTree.insertInOrder(3);
myTree.insertInOrder(5);
myTree.insertInOrder(2);

console.log(myTree.getRandomNode());
