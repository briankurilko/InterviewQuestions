function createNode(data) {
  return { data, next: null };
}

export class Queue {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
    this.length = 0;
  }

  add(data) {
    this.length++;
    const newNode = createNode(data);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    this.head = this.tail = newNode;
    return;
  }

  getFirst() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    --this.length;
    const firstNode = this.head;
    this.head = this.head.next;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode.data;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}
