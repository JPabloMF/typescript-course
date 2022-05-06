(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWorld = (): string => `The world is saved`;

  // let myFunction: Function;
  let myFunction: (a: number, b: number) => number; // type of function
  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  let myFunction2: (name: string) => string; // type of function
  myFunction2 = greet;
  console.log(myFunction2("John"));

  let myFunction3: () => string; // type of function
  myFunction3 = saveTheWorld;
  console.log(myFunction3());
})();
