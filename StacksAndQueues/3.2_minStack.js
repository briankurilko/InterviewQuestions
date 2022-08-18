class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  push(value) {
    let previousMin = this.min;
    if (
      this.min === null ||
      value < this.min
    ) {
      this.min = value;
    }
    this.stack.push({ value, previousMin });
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const { value, previousMin } = this.stack.pop();
    this.min = previousMin;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const minStack = new MinStack();

minStack.push(13);
minStack.push(123);
minStack.push(123);
minStack.push(12);
minStack.push(1212354);
minStack.push(11234234324);

console.log(minStack.getMin());
minStack.pop();
minStack.pop();
minStack.pop();
minStack.pop();

console.log(minStack.getMin());
