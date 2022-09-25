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
      value <= this.sortedStack[this.sortedStack.length - 1].value
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

class SortedStackBookVersion {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    this.sortStack(this.stack);
  }

  sortStack(s) {
    const firstElement = s[s.length - 1];
    const r = [];
    while (s.length !== 0) {
      /* Insert each element in s in sorted order into r. */
      const tmp = s.pop();
      while (r.length !== 0 && r[r.length - 1] > tmp) {
        s.push(r.pop());
      }
      
      r.push(tmp);
    }
    /* Copy the elements from r back into s. */
    while (r.length !== 0) {
      s.push(r.pop());
    }
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1].value;
  }
}

const myStack = new SortedStackBookVersion();

myStack.push(4);
myStack.push(2);
myStack.push(2);
myStack.push(3);
myStack.push(100);
myStack.push(120);
myStack.push(1);

// myStack.printStacks();

console.log(myStack.pop()); // 1
console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 3
console.log(myStack.pop()); // 4
console.log(myStack.pop()); // 100
console.log(myStack.pop()); // 120
