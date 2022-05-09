(() => {
  let person = {
    name: "John",
    age: 25,
    isMarried: false,
  };

  person = {
    name: "Ivan",
    age: 30,
    isMarried: true,
  };

  let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
    name: "Barry",
    age: 24,
    powers: ["speed", "flight", "super strength"],
  };

  let superman: { name: string, age: number, powers: string[], getName?: () => string } = {
    name: "Clark",
    age: 60,
    powers: ["super strength"],
  };

  flash = {
      name: 'Clark',
      age: 30,
      powers: ['super strength', 'flight', 'x-ray vision'],
      getName() {
          return this.name;
      }
  }
})();
