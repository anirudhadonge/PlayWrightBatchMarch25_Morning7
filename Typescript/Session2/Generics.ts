import { Student } from "./Classes";

/**
 * 
 * its a way to write a reusable, flexible and type-safe code.
 */

function displayType<T>(variable:T){
    console.log(typeof(variable));
    console.log(variable);
}

let student = new Student('anirudha',7)

displayType<string>('This my string');
displayType<number>(10);

displayType<Student>(student);

enum constants{
    Anirudha="anirudha",
    myString='This my string is new string',
}

displayType<string>(constants.myString);


displayType<string>(constants.myString);