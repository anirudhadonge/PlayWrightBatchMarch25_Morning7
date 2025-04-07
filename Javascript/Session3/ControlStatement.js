/**
 * if
 * nested if
 * else
 * condition statment using ternary operator ?
 * Switch statement : 
 * 
 */

/** operators
 * ==  when you compare the value
 * === when you compare the value and type
 * && AND 
 * || OR
 * ?  tenary operator
 * */ 

// if statment
/// when you have multiple condition then we use nested if

//if(condition(it should positive)){}
// let flag = false;
// if(flag){
//     console.log("The flag is true");
// }

let num1 = '6';
let num2 = '5'

//
// if(typeof(num1)== typeof(num2) ){
//     console.log(`type of num1 ${typeof(num1)} and type of num2 ${typeof(num2)}`);
// }else if(num1==num2){
//     console.log(`${num1} is equal to ${num2}`);
// } else {
//     console.log('Number and type are not equal');
// }

// if(typeof(num1)== typeof(num2) ){
//     console.log(`type of num1 ${typeof(num1)} and type of num2 ${typeof(num2)}`);
// } else {
//     console.log('Number and type are not equal');
// }
//typeof(num1)== typeof(num2)?console.log(`type of num1 ${typeof(num1)} and type of num2 ${typeof(num2)}`):console.log('Number and type are not equal');
// if(typeof(num1)== typeof(num2) ){
//     console.log(`type of num1 ${typeof(num1)} and type of num2 ${typeof(num2)}`);
// }else if(num1==num2){
//     console.log(`${num1} is equal to ${num2}`);
// } else if(false){
//     console.log("Do some thing");
// } else if (true){
//     console.log("Do some thing");
// }
// else {
//     console.log('Number and type are not equal');
// }

let month =7
switch(month){
    case 1:
        console.log("its January");
        break;
    case 2:
        console.log("its Feburaury");
        break;
    case 3:
        console.log("Its March");
        break;
    case 4:
        console.log("Its April");
        break;
    case 5:
        console.log("Its May");
        break;
    default:
        console.log(`${month} does not match cases`);
}