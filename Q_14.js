//Question 14. What will be the output of the following code?
let bar=true
console.log(bar)
console.log(bar+1)
console.log(bar+"xyz")
console.log(bar+true)
console.log(bar+false) 
/*
The code above will output 1, "truexyz", 2, 1 as output. Here's a general guideline for the plus operator:

Number + Number -> Addition
Boolean + Number -> Addition
Boolean + Boolean -> Addition
Number + String -> Concatenation
String + Boolean -> Concatenation
String + String -> Concatenation
*/