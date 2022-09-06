class SortedStackUnoptimized {
  constructor() {
    this.stack = [];
    this.tempStack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    let minElement = null;
    while (this.stack.length !== 0) {
      const element = this.stack.pop();
      if (minElement === null || element < minElement) {
        minElement = element;
      }
      this.tempStack.push(element);
    }
    while (this.tempStack.length !== 0) {
      const element = this.tempStack.pop();
      if (element !== minElement) {
        this.stack.push(element);
      }
    }
    return minElement;
  }

  peek() {
    let minElement = null;
    while (this.stack.length !== 0) {
      const element = this.stack.pop();
      if (minElement === null || element < minElement) {
        minElement = element;
      }
      this.tempStack.push(element);
    }
    while (this.tempStack.length !== 0) {
      this.stack.push(this.tempStack.pop());
    }
    return minElement;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

class SortedStackOptimized {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  sortStacks() {
    const tempStack = [];
    if (this.stack.length !== 0) {
      while (this.sortedStack.length !== 0) {
        this.stack.push(this.sortedStack.pop());
      }
      while (this.stack.length != 0) {
          
      }
    }
  }
}

const myStack = new SortedStackUnoptimized();

myStack.push(4);
myStack.push(2);
myStack.push(100);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
