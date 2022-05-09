(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Hello"; // we can have several types in union type
  console.log(myCustomVariable);

  myCustomVariable = 10;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: "Bruce Wayne",
    age: 35,
    powers: ["money", "smartness"],
  };
})();
