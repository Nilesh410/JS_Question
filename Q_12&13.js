//Question 12. What is undefined x 1 in JavaScript
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(trees,"\n","size of array:",trees.length)

delete trees[3];
console.log(trees,"\n","size of array:",trees.length)
//delete operator just deinitialized the array element 
console.log("nilesh")
/*
he code above will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using `delete` operator.
So when delete operator removes an array element that deleted element is no longer present in the array.
*/