"use strict";
const msg = 'Hello World!!';
console.log(msg);
(() => {
    // Optional parameters should be placed at the end
    function fullName(firstName, lastName) {
        return `${firstName} ${lastName || 'Stark'}`;
    }
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    function fullName(firstName, lastName = 'Default') {
        return `${firstName} ${lastName}`;
    }
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved`;
    // let myFunction: Function;
    let myFunction; // type of function
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    let myFunction2; // type of function
    myFunction2 = greet;
    console.log(myFunction2("John"));
    let myFunction3; // type of function
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
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
    let flash = {
        name: "Barry",
        age: 24,
        powers: ["speed", "flight", "super strength"],
    };
    let superman = {
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
    };
})();
(() => {
    let flash = {
        name: "Barry",
        age: 24,
        powers: ["speed", "flight", "super strength"],
    };
    let superman = {
        name: "Clark",
        age: 60,
        powers: ["super strength"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = "Hello"; // we can have several types in union type
    console.log(myCustomVariable);
    myCustomVariable = 10;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Bruce Wayne",
        age: 35,
        powers: ["money", "smartness"],
    };
})();
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.fuerzaFlash;
    const fuerzaSuperman = Fuerza.fuerzaSuperman;
    const fuerzaBatman = Fuerza.fuerzaBatman;
    const fuerzaAcuaman = Fuerza.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = [
        "Flash",
        "Arrow",
        "Superman",
        "Linterna Verde",
    ];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
(() => {
    // Multiples tipos
    // cree dos tipos, uno para charles y otro para apocalipsis
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let test = "test";
    let exist; // default type is any
    const done = true; // const must be initialized
})();
(() => {
    let myArray = [1, 2, 3];
    let myOtherArray = [1, 2, 3];
    let myStringArray = ["Hello", "World"];
    let myAnyArray = [1, "Hello", true];
    let myTuple = [1, "Hello"];
    let myVoidArray = [];
})();
(() => {
    // Boolean
    let isDone = false;
    // Boolean
    let createdByBoolean = Boolean(1);
    console.log({
        isDone,
        createdByBoolean,
    });
})();
(() => {
    // enums are a way to create a set of named constants
    // enums are useful for creating a set of named constants
    // enums must be named in uppercamelcase
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
})();
(() => {
    // never:
    // never is a type that represents the type of values that never occur.
    // For example, never is the return type of a function expression or an arrow function expression that always throws an exception or one that never returns; or the type of arguments that are never provided to an ordinary function invocation.}
    // this means that the function does not return a value (nor does it throw an exception).
    // A never type has the following members:
    // • anyFunction: the function type (that is, the type of a function declaration or expression).
    // • anyObject: the object type.
    // • anyArray: the array type.
    // • anyString: the string type.
    // • anyNumber: the number type.
    // • anyBoolean: the boolean type.
    // • anySymbol: the symbol type.
    // • anyType: the type any type.
    // • anyUnion: the union type.
    // • anyIntersection: the intersection type.
    // • anyIndex: the index type.
    // • anyIndexedAccess: the indexed access type.
    // • anyConditional: the conditional type.
    // • anyNonNull: the non-null type.
    // • anyTemplate: the template type.
    // • anyTypeReference: the type reference type.
    // • anyFunctionType: the function type.
    // • anyConstructorType: the constructor type.
    // • anyCallSignature: the call signature.
    // • anyConstructSignature: the construct signature.
    // • anyIndexSignature: the index signature.
    // • anyPropertySignature: the property signature.
    // • anyMethodSignature: the method signature.
    // • anyTypePredicate: the type predicate type.
    // • anyTypeQuery: the type query type.
    // • anyTypeLiteral: the type literal type.
    // • anyArrayType: the array type.
    // • anyTupleType: the tuple type.
    // • anyUnionType: the union type.
    // • anyIntersectionType: the intersection type.
    // • anyParenthesizedType: the parenthesized type.
    // • anyThisType: the this type.
    // • anyTypeOperator: the
})();
(() => {
    let anything = undefined;
    let anything1 = null;
})();
(() => {
    // Typing numbers
    let test = 123;
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
(() => {
    // Strings
    let myName = 'Max';
    let myAge = 27;
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
(() => {
    const hero = ['Superman', 100]; // first element is a string, second is a number ALWAYS!!!
    const hero1 = ['Superman', 100, true]; // first element is a string, second is a number, third is a boolean
    // hero1[3] = false; // error, the array is fixed to 3 elements
})();
(() => {
    // void is used to indicate that a function doesn't return a value.
    function sayHello() {
        console.log("Hello");
    }
    sayHello();
})();
