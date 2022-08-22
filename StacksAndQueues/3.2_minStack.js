class MinStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    let min = this.getMin();
    if (this.stack.length === 0 || value < this.getMin()) {
      min = value;
    }
    this.stack.push({ value, min });
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const { value } = this.stack.pop();
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1].value;
  }

  getMin() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1].min;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const minStack = new MinStack();

stacks.push(5);
stacks.push(6);
stacks.push(3);
stacks.push(7);

console.log(stacks.getMin());
stacks.pop();
stacks.pop();

console.log(stacks.getMin());
