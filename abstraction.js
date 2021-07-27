class Animal {
  constructor() {}
  talk() {
    throw new Error('You must implement talk method');
  }
}
class Cat extends Animal {
  talk() {
    console.log('Meow Meow');
  }
}

class Dog extends Animal {
  talks() {
    console.log('break break');
  }
  talk() {
    console.log('break break');
  }
}

const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();
