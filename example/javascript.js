// // assigning variables
// let firstName = "John";
// let lastName = "Doe";

// console.log(firstName);
// console.log(lastName);

// // reassigning variables
// let age = 11;
// console.log(age); // outputs 11 to the console

// age = 54;

// console.log(age); // 54

// let b = 7*age;
// console.log(b);

// // assigning constants
// const pi = 3.14;
// pi = 10;    //cannot do this, 

// console.log(pi); // output will be an error cus we reassign it

num = 10;
numA = 3;
numB = 2;
ayat = "kucing";
ayat2 = "test";

function add7 (number){
    return console.log(number + 7);
}

function multiply (a, b){
    return console.log(a *b);
}

function capitalise(ayatulKursi){
    return console.log(ayatulKursi.toUpperCase());
}

function lastLetter(last){
    return console.log(last.at(-1));
}

add7(num);
multiply(numA, numB);
capitalise(ayat2);
lastLetter(ayat)