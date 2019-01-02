export default class Module {
  constructor() {
    this.prop1 = 1;
    this.prop2 = 2;
  }

  getSum() {
    const { prop1, prop2 } = this;
    return prop1 + prop2;
  }
}