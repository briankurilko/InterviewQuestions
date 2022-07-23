class ThreeStacks {
  constructor() {
    this.array = [];
    this.stack1Index = 0;
    this.stack1CurrentLength = 0;
    this.stack2Index = 3;
    this.stack2CurrentLength = 0;
    this.stack3Index = 7;
    this.stack3CurrentLength = 0;
    this.totalArrayLength = 11;
    this.currentStackLength = 4;
  }

  peekStack1() {
    if (this.stack1CurrentLength === 0) {
      return null;
    }
    return array[this.stack1Index + this.stack1CurrentLength - 1];
  }

  pushStack1(item) {
    this.stack1CurrentLength++;
    if (this.stack1CurrentLength >= this.stack2Index) {
      this.doubleArraySize();
    }
    this.array[this.stack1Index + this.stack1CurrentLength - 1] = item;
  }

  popStack1() {
    if (this.stack1CurrentLength === 0) {
      throw new Error("The stack 1 is currently empty.");
    }
    const item = this.array[this.stack1Index + this.stack1CurrentLength - 1];
    this.array[this.stack1Index + this.stack1CurrentLength - 1] = undefined;
    this.stack1CurrentLength--;
    return item;
  }

  isEmptyStack1() {
    return this.stack1CurrentLength === 0;
  }

  peekStack2() {
    if (this.stack2CurrentLength === 0) {
      return null;
    }
    return array[this.stack2Index + this.stack2CurrentLength - 1];
  }

  pushStack2(item) {
    this.stack2CurrentLength++;
    if (this.stack2CurrentLength >= this.stack3Index) {
      this.doubleArraySize();
    }
    this.array[this.stack2Index + this.stack2CurrentLength - 1] = item;
  }

  popStack2() {
    if (this.stack2CurrentLength === 0) {
      throw new Error("The stack 2 is currently empty.");
    }
    const item = this.array[this.stack2Index + this.stack2CurrentLength - 1];
    this.array[this.stack2Index + this.stack2CurrentLength - 1] = undefined;
    this.stack2CurrentLength--;
    return item;
  }

  isEmptyStack2() {
    return this.stack2CurrentLength === 0;
  }

  peekStack3() {
    if (this.stack3CurrentLength === 0) {
      return null;
    }
    return array[this.stack3Index + this.stack3CurrentLength - 1];
  }

  pushStack3(item) {
    this.stack3CurrentLength++;
    if (this.stack3CurrentLength >= this.totalArrayLength - this.stack3Index) {
      this.doubleArraySize();
    }
    this.array[this.stack3Index + this.stack3CurrentLength - 1] = item;
  }

  popStack3() {
    if (this.stack3CurrentLength === 0) {
      throw new Error("The stack 3 is currently empty.");
    }
    const item = this.array[this.stack3Index + this.stack3CurrentLength - 1];
    this.array[this.stack3Index + this.stack3CurrentLength - 1] = undefined;
    this.stack3CurrentLength--;
    return item;
  }

  isEmptyStack3() {
    return this.stack3CurrentLength === 0;
  }

  doubleArraySize() {
    const newStack3Index = this.stack3Index + (this.currentStackLength * 2);
    for (let i = 0; i < this.stack3CurrentLength; ++i) {
      this.array[i + newStack3Index] = this.array[i + this.stack3Index];
      this.array[i + this.stack3Index] = undefined;
    }
    this.stack3Index = newStack3Index;

    const newStack2Index = this.stack2Index + this.currentStackLength;
    for (let i = 0; i < this.stack2CurrentLength; ++i) {
      this.array[i + newStack2Index] = this.array[i + this.stack2Index];
      this.array[i + this.stack2Index] = undefined;
    }
    this.stack2Index = newStack2Index;

    this.currentStackLength = this.currentStackLength * 2;
    this.totalArrayLength = this.totalArrayLength * 2;
  }

  printArray() {
      console.log(this.array);
      console.log(this.totalArrayLength);
      console.log(this.stack2Index);
      console.log(this.stack3Index);
  }

}

const myStack = new ThreeStacks();

myStack.pushStack1(1);
myStack.pushStack1(2);
myStack.pushStack3(7);
myStack.pushStack3(9);
myStack.pushStack3(10);
myStack.pushStack3(10);
myStack.pushStack3(10);
myStack.pushStack3(10);
myStack.pushStack3(12);
myStack.pushStack3(13);
myStack.pushStack2(11);
myStack.pushStack2(12);
myStack.pushStack2(13);

console.log(myStack.popStack1());
console.log(myStack.popStack1());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack3());
console.log(myStack.popStack2());
console.log(myStack.popStack2());
console.log(myStack.popStack2());
myStack.printArray();

myStack.popStack3();