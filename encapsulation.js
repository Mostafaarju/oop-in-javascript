class Tiger {
  #speed = 100;
  location = 'Borisal';
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`I am ${this.name}. I am running at ${this.#speed} MPH`);
  }
}
const royal = new Tiger('Royal Bengal');
royal.run();
