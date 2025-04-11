/**
 * try
 * catch
 * finally
 * throw: If you want to throw a custom exception and want other to handle the exception then you will be using throw. 
 * 
 */

function fun1(val){
    //connecting to db
try{
    fun2();
}catch(msg){
    throw "Error occured and Custom error thrown."
}finally{
    //close connection 
    console.log("Error is not handled");
}

}

// function fun2(){
//     console.log('fun 2 is executed');
// }

function fun3(){
    try{
    fun1();
    }catch(msg){
        console.log(msg);
    }
}

fun3();