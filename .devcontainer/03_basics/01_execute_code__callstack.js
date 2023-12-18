
// Window is a Global Execution Context for browser

// Global Execution Context   =>> this
// Function Execution Context
// Eval Execution Context


let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total=num1+num2;
    return total;
}

let result1 = addNum(val1,val2);
let result2 = addNum(3,5);

console.log(result1);
console.log(result2);

// From above example we will learn the execution context :
// 1) Global Execution Context   =>> this

// 2) Memory creation phase:
    // val1 => undefined
    // val2 => undefined
    // addNum => defintion
    // num1 => undefined
    // num2 => undefined

// 3) Execution phase:
    // val1 =>10
    // val2 =>5
    // addNum => new variable environment + Execution thread
              
            //  Memory phase                  Execution phase:
              // val1 => undefined          num1 => 10
              // val2 => undefined          num2 => 5
              // total => undefined         total => 15  => this will return to step 1: Global Execution Context
            //   Once the Global Execution Context is executed then it will delete itself for addNum
    
    // result1 =>15

    // Now it will do the same process from step 3) addNum for result2 => 8


// Call-stack:

function one(){
    console.log("one")             // one will call two ,two will call three then it will come out
    two()
}
function two(){
    console.log("two")             //two will call three then it will come out
    three()
}
function three(){
    console.log("three")           // it will come out directly after execution
}

one()
two()
three()



    