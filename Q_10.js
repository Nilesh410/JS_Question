//Question 10. What will be the output of the following code?
let obj={"foo":1}
let fun1=(function (x){
    delete obj.foo
    console.log(x)
    return obj.foo
})()

console.log(fun1)