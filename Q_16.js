//Question 16. What will be the output of the following code?
//NFE:- Named Function Expression

let foo = function bar(){
    console.log(typeof(bar));//function 
    //console.log(typeof bar()) //contineously execute until call stack size exceed 
    return 12;
};
console.log(typeof(bar))//undefined
console.log(typeof(foo)) //function
console.log(typeof foo())//function execute and shows type ->number
console.log(foo()) // function execute 
//console.log(bar) //reference error bar is not defined
