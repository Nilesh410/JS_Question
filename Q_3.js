//Question 3. 
//What is the drawback of declaring methods directly in JavaScript objects?
//One of the drawbacks of declaring methods directly in JavaScript objects is that they are very memory inefficient. When you do that, 
//a new copy of the method is created for each instance of an object

let data1={
    "first":function foo(num){
         return num
    }
}

console.log(data1.first(10))

