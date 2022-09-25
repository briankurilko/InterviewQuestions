class SortedStackUnoptimized {
  // O(1) push, O(N) peek and pop. Doesn't work with repeated elements at the moment.
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
  // O(1) pop and peek, O(n^2) worst case push, but possibly O(1) push. Even if we have to sort stacks, 
  // we don't necessarily sort the entire stack unless we get the biggest element we've ever received, so hopefully we
  // don't usually loop through the entire array at once.
  constructor() {
    this.stack = [];
    this.sortedStack = [];
  }

  push(value) {
    if (
      this.sortedStack.length === 0 ||
      value < this.sortedStack[this.sortedStack.length - 1]
    ) {
      this.sortedStack.push({ value });
    } else {
      this.sortStacks(value);
    }
  }

  sortStacks(newestValue) {
    let newValuePushedIntoSortedStack = false;
    while (this.sortedStack.length !== 0) {
      if (newestValue <= this.sortedStack[this.sortedStack.length - 1].value) {
        this.sortedStack.push({ value: newestValue });
        newValuePushedIntoSortedStack = true;
        break;
      }
      this.stack.push(this.sortedStack.pop());
    }
    if (!newValuePushedIntoSortedStack) {
      console.log("hooray");
      this.stack.push({ value: newestValue });
    }
    while (this.stack.length !== 0) {
      const maxElement = this.findAndPopMaximumElement();
      this.sortedStack.push(maxElement);
    }
  }

  findAndPopMaximumElement() {
    let maxElement = null;
    let count = 0;
    while (this.stack.length !== 0) {
      const element = this.stack.pop();
      if (maxElement === null || maxElement.value < element.value) {
        maxElement = element;
      }
      this.sortedStack.push(element);
      ++count;
    }
    while (count > 0) {
      const currentElement = this.sortedStack.pop();
      if (currentElement !== maxElement) {
        this.stack.push(currentElement);
      }
      --count;
    }
    return maxElement;
  }

  peek() {
    return this.sortedStack[this.sortedStack.length - 1].value;
  }

  pop() {
    return this.sortedStack.pop().value;
  }

  printStacks() {
    console.log(this.sortedStack);
  }
}

const myStack = new SortedStackOptimized();

myStack.push(4);
myStack.push(2);
myStack.push(2);
myStack.push(3);
myStack.push(100);
myStack.push(120);

console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 3
console.log(myStack.pop()); // 4
console.log(myStack.pop()); // 100
