class Animal {
  static category = 'Dog';
  location = 'Khagracori';
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  static compare(animal1, animal2) {
    if (animal1 > animal2) {
      return `${animal1.name} is Faster`;
    }
    return `${animal2.name} is Faster`;
  }
}

const myRat = new Animal('rat', 112);
const myDog = new Animal('dog', 15);
// console.log(myRate.category);
// console.log(myRate.location);
// console.log(Animal.category);
// console.log(Animal.location);
console.log(Animal.compare(myRat, myDog));
