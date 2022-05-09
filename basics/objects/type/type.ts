(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry",
    age: 24,
    powers: ["speed", "flight", "super strength"],
  };

  let superman: Hero = {
    name: "Clark",
    age: 60,
    powers: ["super strength"],
    getName() {
      return this.name;
    },
  };
})();
