class SmartDevice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  charging() {
    console.log('I am eating electrons... they yummy');
  }
}

class Phone extends SmartDevice {
  constructor(name, price, camera) {
    super(name, price);
    this.camera = camera;
  }
  sendSms() {
    console.log('My Sms for you');
  }
}

class Watch extends SmartDevice {
  constructor(name, price, distance) {
    super(name, price);
    this.distance = distance;
  }
}

class Tablet extends SmartDevice {
  constructor(name, price, isWifi) {
    super(name, price);
    this.isWifi = isWifi;
  }
}

const samsu = new Phone('Iam', 40000, '32pixel');
samsu.sendSms();
const iPads = new Tablet('Apple', 70000, true);
ipad.sendSms(); //Not Working because is not in parents, is in chields.
