import '../sass/app.scss';

class Module {
  constructor() {
    this.prop1 = 1;
    this.prop2 = 2;
  }

  getProps() {
    const { prop1, prop2 } = this;
    return { prop1, prop2 };
  }
}

const module = new Module();
console.log(module.getProps());