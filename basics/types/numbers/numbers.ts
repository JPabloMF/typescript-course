(() => {
  // Typing numbers
  let test: number = 123;
  console.log(test);
  // Numbers
  let x = 10;
  let y = 20;
  let z = x + y;
  console.log(z);
  // TypeScript supports the concept of numeric literals.
  // These are values like 10, 100, and so on.
  // TypeScript infers the type of the literal from the value.
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
  // TypeScript supports the concept of hexadecimal and octal literals.
  // These are values like 0xFF and 0o777.
  let d = 0xff;
  let e = 0o777;
  console.log(d);
  console.log(e);
  // TypeScript supports the concept of binary literals.
  // These are values like 0b1010 and 0b0101.
  let f = 0b1010;
  console.log(f);
  // TypeScript supports the concept of bigint literals.
  // These are values like 100n.
  // ERROR NOTE: BigInt literals are not available when targeting lower than ES2020
  // let g = 100n;
  // console.log(g);
  // TypeScript supports the concept of numeric separators.
  // These are strings that can contain placeholders.
  let j = `${x} + ${y} = ${x + y}`;
  console.log(j);
  // TypeScript supports the concept of octal literals.
  // These are values like 0o777.
  let k = 0o777;
  console.log(k);
})();
