//Question 4. What is “closure” in javascript? Can you provide an example?
/*
A closure is a function defined inside another function (called parent function)
 and as such it has access to the variables declared and defined within its parent function's scope.

The closure has access to the variables in three scopes:
Variable declared in its own scope
Variable declared in its parent function's scope
Variable declared in the global namespace
*/
//use self invoking function 

var global_variable=10

(function outer_fun(outer_fun_argument){
    var outer_fun_variable=7;
    (function inner_fun(inner_fun_argument){
        var inner_fun_variable=5
        console.log("inner_fun_variable:"+inner_fun_variable+"\n" +
        "inner_fun_argument:"+inner_fun_argument+"\n"+
        "outer_fun_variable:"+outer_fun_variable+"\n"+
        "outer_fun_argument:"+outer_fun_argument+"\n"+
        "global_variable:"+global_variable)
    })(3)
})(2)
