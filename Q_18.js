//Question 18. In which case the function definition is not hoisted in JavaScript?
foo();//foo is not defined
var foo = function foo() {
    return 12;
}
/*
In JavaScript var-declared variables and functions are hoisted. 
Let's take function hoisting first. Basically, the JavaScript 
interpreter looks ahead to find all the variable declaration and 
hoists them to the top of the function where it's declared. 
*/