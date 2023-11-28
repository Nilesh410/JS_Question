//Question 15. What will be the output of the following code?
var z = 1, y = z = typeof y;
console.log(y);
console.log(z)
//both are undefined because without initialization of y cant find out 
//the type of y and assignment operator its associativity is from right to left
/*
According to associativity rule operator with the same precedence 
are processed based on their associativity property of operator.
 Here associativity of the assignment operator is Right to Left so 
 first typeof y will evaluate first which is string "undefined" 
 and assigned to z and then y would be assigned the value of z
*/