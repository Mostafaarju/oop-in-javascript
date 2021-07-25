class PenDrive {
  constructor(capacity, color, price) {
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
}

const trusted = new PenDrive('32GB', 'Black', 2000);
console.log(trusted);
const Toshiba = new PenDrive('16GB', 'White', 1000);
console.log(Toshiba);

function Gallo(capacity, color, price) {
  this.capacity = capacity;
  this.color = color;
  this.price = price;
}
const Galli = new Gallo('32GB', 'whoite', 2000);
console.log(Galli);
