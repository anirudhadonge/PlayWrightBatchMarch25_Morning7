// let fruits = ['Apple','Banana','Kiwi','WaterMellon']

// let commonFruits =['Mango','PineApple']


// console.log(fruits.concat(commonFruits));

// console.log(fruits);


// let newArray = [...fruits,...commonFruits];
// console.log(newArray);
// newArray = ['Orange'];
// console.log(newArray);
//iterating Arrays
/**
 * foreach
 * map
 * filter
 * 
 */
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// fruits.forEach((value)=>{
//     if(value=='Banana'){
//         let index = fruits.indexOf('Banana');
//         fruits.splice(index,1)
//     }
//     console.log(value);
// })


// console.log(fruits);

//map

// let newArray = fruits.map((value)=>{
//         return value+" $"
    
// })

// console.log(newArray);
// console.log(fruits);


// filter
let myNumber = [34,55,6,25,15,13,2]

//let newArray1=[];

// for(let i=0;i<myNumber.length;i++){
//     if(myNumber[i]<30){
//         newArray1.push(myNumber[i]);
//     }
// }
// console.log(newArray1);
// let newArray = myNumber.filter((value)=>{
//     return value <30 && value>6;
// })

// console.log(myNumber);
// console.log(newArray);

/// for of /// It deals with the value of the collections
/// for in

// for(const myNum of myNumber){
//     console.log(myNum);
// }

console.log(typeof(myNumber));
/**
 * {
 * 
 * 0:34
 * 1:55
 * 3:6
 * 
 * }
 * 
 * 
 */
// for(const key in myNumber){
//     console.log(`key is ${key} and its value is ${myNumber[key]}`);
// }

let book={
    name:"Harry Potter",
    Author:"Anirudha",
    page:100,
    category:"Fiction"
}

for(const key in book){
    console.log(`key is ${key} and its value is ${book[key]}`);
}