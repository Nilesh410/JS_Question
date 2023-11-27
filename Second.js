//Que.2) For which value of x the results of the following statements are not the same?
let x=NaN
console.log((x>100))
if(x<100)
{
    console.log("First if run: ",x)
}
if(!(x>100))
{
    console.log("second if run: ",x)
}