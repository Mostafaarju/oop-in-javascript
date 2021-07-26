class Hero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  getPower() {
    if (this.power) {
      return this.power;
    }
    return 'I have no Power';
  }
  goForGrocery(budget) {
    if (this.power && budget > 1000) {
      console.log(this.getPower());
    }
    return 'Price is low heigh, I can not buy';
  }
}

const catMan = new Hero('Batman', 'Deep Khamchi');
// console.log(catMan.power);
console.log(catMan.goForGrocery(1000));
