class ThreeStacks {
  constructor(stackSize) {
    this.numberOfStacks = 3;
    this.stackCapacity = stackSize;
    this.values = new Array(this.numberOfStacks * this.stackCapacity);
    this.sizes = new Array(this.numberOfStacks).fill(0);
  }

  push(stackNum, value) {
    if (this.isFull(stackNum)) {
      this.doubleArraySize();
    }
    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error(`Stack ${stackNum} is empty.`);
    }
    const index = this.indexOfTop(stackNum);
    const value = this.values[index];
    this.values[index] = undefined;
    this.sizes[stackNum]--;
    return value;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error(`Stack ${stackNum} is empty.`);
    }
    return this.value[this.indexOfTop(stackNum)];
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  indexOfTop(stackNum) {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }

  doubleArraySize() {
    const newStackCapacity = this.stackCapacity * 2;
    const newValuesArray = new Array(newStackCapacity * this.numberOfStacks);
    let stackToCopy = this.numberOfStacks - 1;
    while (stackToCopy >= 0) {
      let offset = stackToCopy * this.stackCapacity;
      let newOffset = stackToCopy * newStackCapacity;
      let currentStackSize = this.sizes[stackToCopy];
      while (currentStackSize - 1 >= 0) {
        newValuesArray[newOffset + currentStackSize - 1] =
          this.values[offset + currentStackSize - 1];
        --currentStackSize;
      }
      --stackToCopy;
    }
    this.stackCapacity = newStackCapacity;
    this.values = newValuesArray;
  }

  printArray() {
    console.log(this.values);
    console.log(this.sizes);
    console.log(this.values.length);
  }
}


const myStack = new ThreeStacks(1);

myStack.push(0, 1);
myStack.push(0, 2);
myStack.push(2, 7);
myStack.push(2, 9);
myStack.push(2, 10);
myStack.push(2, 10);
myStack.push(2, 10);
myStack.push(2, 10);
myStack.push(2, 12);
myStack.push(2, 13);
myStack.push(1, 11);
myStack.push(1, 12);
myStack.push(1, 13);

console.log(myStack.pop(0)); // should be 2
console.log(myStack.pop(0)); // should be 1
console.log(myStack.pop(2)); // should be 13
console.log(myStack.pop(2)); // should be 12
console.log(myStack.pop(2)); // should be 10
console.log(myStack.pop(2)); // should be 10
console.log(myStack.pop(2)); // should be 10
console.log(myStack.pop(2)); // should be 10
console.log(myStack.pop(2)); // should be 9
console.log(myStack.pop(2)); // should be 7
console.log(myStack.pop(1)); // should be 13
console.log(myStack.pop(1)); // should be 12
console.log(myStack.pop(1)); // should be 11