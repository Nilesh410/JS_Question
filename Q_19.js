//Question 19. What will be the output of the following code?

var salary=1000;
(function (){
    console.log("first salary:",salary) //shows undefined 
    var salary=2000 //salary=2000 for that first line shows 1000 and then 2000
    console.log("new salary:",salary) //shows 2000
})()
/* Clear the concept of hoisting */