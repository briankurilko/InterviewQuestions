class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] < value) {
      this.minStack = 
    }
    this.stack.push(value);
  }

  pop() {
    const value = this.stack.pop();
    if (this.max && this.max === value) {
        this.max = this.previousMax;
    }
  }
}
