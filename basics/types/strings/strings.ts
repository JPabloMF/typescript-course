(() => {
    // Strings
    let myName: string = 'Max';
    let myAge: number = 27;
    // Template strings
    console.log(`My name is ${myName} and I am ${myAge} years old.`);
    // Multiline strings
    let myMultilineString = `My name is ${myName}
    and I am ${myAge} years old.`;
    console.log(myMultilineString);
    // String interpolation
    let myMultilineString2 = `My name is ${myName}
    and I am ${myAge + 1} years old.`;
    console.log(myMultilineString2);
    // String concatenation
    let myMultilineString3 = myMultilineString + myMultilineString2;
    console.log(myMultilineString3);
    // String length
    console.log(myMultilineString.length);
})();
