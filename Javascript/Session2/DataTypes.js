/**
 * Number
 * String
 * Boolean
 * Undefined
 * Null : standalone value
 * Object
 * Array
 * Symbol --- We will not be learning 
 */

/*
Number : Any numberical value which might be an Integer or a decimal value.
Integer 
*/

let a = 5;
console.log(typeof(a));
let b = -1.5;
console.log(typeof(b));
console.log(b);

/// String: Any value which is enclosed in '' or a "" is a string type
// let mystring = 'Anirudha'

// let mySecondString = "Playwright class";

// console.log(typeof(mystring));
// console.log(typeof(mySecondString));


/// Boolean : it will have only two values true/false

// let flag = true;
// console.log(typeof(flag));

// flag = false;

// console.log(typeof(flag));

/// Undefined : Whenever we have declared a variable and we have not assinged a value to it.

// let a ;

// console.log(typeof(a));

// function display(a){
//     console.log(a);
// }

// display(b);

// let a =null;
// console.log(typeof(a));


// Whenever we want encapsulate multiple properties in one item or entity we can create an object

// let student = {
//     name:"Anirudha",
//     rollNumber :  7,
//     Marks :60
// }

// console.log(student.name);
// student.name = "Rohit"


let book={
    name:"Harry Potter",
    Author:"Anirudha",
    page:100,
    category:"Fiction"
}

console.log(typeof(book))