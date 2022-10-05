class Queue {
  constructor() {
    this.newStack = [];
    this.oldStack = [];
  }

  add(element) {
    this.oldStack.push(element);
  }

  shiftStacks() {
    if (this.newStack.length === 0) {
      while (this.oldStack.length !== 0) {
        this.newStack.push(this.oldStack.pop());
      }
    }
  }

  peek() {
    this.shiftStacks();
    return this.newStack[this.newStack.length - 1];
  }

  remove() {
    this.shiftStacks();
    return this.newStack.pop();
  }

  isEmpty() {
    return this.oldStack.length + this.newStack.length === 0;
  }
}

const myQueue = new Queue();

myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);

console.log(myQueue.peek());
console.log(myQueue.remove());
console.log(myQueue.peek());
console.log(myQueue.remove());
console.log(myQueue.peek());
myQueue.add(5);
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.peek());
