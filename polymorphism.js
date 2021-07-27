class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }
  area() {
    return this.height * this.weight;
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

const shapes = [new Circle(10), new Rectangle(10, 5), new Triangle(10, 10)];
for (let i = 0; i < shapes.length; i++) {
  const shape = shapes[i];
  console.log(shape.area());
}
