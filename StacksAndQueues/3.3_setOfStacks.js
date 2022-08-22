class SetOfStacks {
  constructor(threshold) {
    this.threshold = threshold;
    this.stacksArray = [];
    this.currentStackIndex = 0;
  }

  push(value) {
    if (!this.stacksArray[this.currentStackIndex]) {
      this.stacksArray[this.currentStackIndex] = [];
    }
    this.stacksArray[this.currentStackIndex].push(value);
    if (this.stacksArray[this.currentStackIndex].length === this.threshold) {
      this.currentStackIndex++;
    }
  }

  pop() {
    if (this.stacksArray.length === 0) {
      throw new Error("The stack is empty.");
    }
    if (!this.stacksArray[this.currentStackIndex]) {
      this.currentStackIndex--;
    } else if (this.stacksArray[this.currentStackIndex].length === 0) {
      this.stacksArray.pop();
      this.currentStackIndex--;
    }
    return this.stacksArray[this.currentStackIndex].pop();
  }

  peek() {
    if (this.stacksArray.length === 0) {
      throw new Error("The stack is empty.");
    }
    return this.stacksArray[this.currentStackIndex];
  }

  popAt(index) {
    if (!this.stacksArray[index] || this.stacksArray[index].length === 0) {
      throw new Error("Sub stack is empty.");
    }
    const value = this.stacksArray[index].pop();
    if (this.stacksArray[index].length === 0) {
      this.stacksArray.splice(index, 1);
    }
    return value;
  }

  printStacks() {
    console.log(this.stacksArray);
    console.log(this.currentStackIndex);
  }
}

const stacks = new SetOfStacks(2);

stacks.push(5);
stacks.push(6);
stacks.push(3);
stacks.push(7);
stacks.push(7);
stacks.push(7);

stacks.printStacks();
stacks.pop();
stacks.popAt(0);
stacks.popAt(1);
stacks.popAt(0);
stacks.popAt(0);
stacks.popAt(0);
// stacks.popAt(1);
stacks.printStacks();
