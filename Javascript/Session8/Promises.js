/**
 *
 * then() // action is successfully executed
 * catch() // this would catch the exception.
 *
 */
async function fun1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("This is function 1");
      resolve("succes");
    }, 4000);
  });
}
let flag = true;
async function fun2() {
  return new Promise((resolve,reject) => {
    if (flag) {
      setTimeout(() => {
        console.log("This is function 2");
        resolve("success");
      }, 500);
    } else {
        reject('Operation failed');
    }
  });
}

async function fun3(fun) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("This is function 3");
      resolve("success");
    }, 1000);
  });
}

// fun1().then((value) => {
//   console.log(value);
//   fun2().then((value) => {
//     console.log(value);
//     fun3();
//   }).catch((error)=>{
//     console.log(error);
//   });
// });
await fun1();
await fun2();
await fun3();