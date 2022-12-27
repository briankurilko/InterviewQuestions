import { Queue } from "./Queue.js";

class DogAndCatQueue {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.order = 0;
  }

  enqueue(animal) {
    this.order++;
    animal.position = this.order;
    if (animal instanceof Cat) {
      this.cats.add(animal);
    }
    if (animal instanceof Dog) {
      this.dogs.add(animal);
    }
  }

  dequeueCat() {
    if (this.cats.size() === 0) {
      return null;
    }
    return this.cats.removeFirst();
  }

  dequeueDog() {
    if (this.dogs.size() === 0) {
      return null;
    }
    return this.dogs.removeFirst();
  }

  dequeueAny() {
    if (this.dogs.size() === 0 && this.cats.size() === 0) {
      return null;
    }
    if (this.dogs.size() === 0) {
      return this.cats.removeFirst();
    }
    if (this.cats.size() === 0) {
      return this.dogs.removeFirst();
    }
    const firstDog = this.dogs.getFirst();
    const firstCat = this.cats.getFirst();
    if (firstDog.position > firstCat.position) {
      return this.cats.removeFirst();
    }
    return this.dogs.removeFirst();
  }
}

class Animal {
  constructor() {
    this.position = null;
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }
}

const firstDog = new Dog();
const firstCat = new Cat();

const dogAndCatQueue = new DogAndCatQueue();
dogAndCatQueue.enqueue(firstCat);
dogAndCatQueue.enqueue(firstDog);
dogAndCatQueue.enqueue(new Cat());
dogAndCatQueue.enqueue(new Dog());
dogAndCatQueue.enqueue(new Cat());
dogAndCatQueue.enqueue(new Dog());
dogAndCatQueue.enqueue(new Dog());
console.log(dogAndCatQueue.dequeueDog());
console.log(dogAndCatQueue.dequeueCat());
console.log(dogAndCatQueue.dequeueAny());
console.log(dogAndCatQueue.dequeueAny());
console.log(dogAndCatQueue.dequeueAny());
console.log(dogAndCatQueue.dequeueAny());
console.log(dogAndCatQueue.dequeueAny());
console.log(dogAndCatQueue.dequeueAny());
