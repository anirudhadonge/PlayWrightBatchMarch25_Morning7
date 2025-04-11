/**
 * Synchronous : we would trigger Actions only after the previous action is completed.
 * Asynchronous : We would trigger Actions one by one without makes sure that our previous action is completed or not. * 
 */
// chaining functions --- callback hell
// changing promises
// Async await

function fun1(fun){
    setTimeout(()=>{
        console.log("This is function 1");
       
    },4000);
}

function fun2(fun){
    setTimeout(()=>{
        console.log("This is function 2");
        if(fun){
            fun();
        }
    },500);
}

function fun3(fun){
    setTimeout(()=>{
        console.log("This is function 3");
        if(fun){
            fun();
        }
    },1000);
}

fun1(()=>{
    fun2();
})