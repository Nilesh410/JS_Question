//Question 17a. What is the difference between declaring a function in the formats listed below?
//foo() //type error :- foo is not function bcoz its define during run time
bar(); //no error run fine its shows output
var foo = function() {
    // this is function expression and its defined at run time
    console.log("Inside from the foo")
  };

  function bar () {
    // this is function declration with name and its defined at parse time 
    console.log("Inside from bar")
  };

  (function abc(){
    console.log("Inside from abc")
  })();
  foo(); //this line shows the output of the function expression 
  bar(); //this line shows the output of the function declration 
  /*
  Since the function is called first and defined during parse time 
  the JS engine will try to find any possible parse time definitions 
  and start the execution loop which will mean function is called first 
  even if the definition is post another function.
  */