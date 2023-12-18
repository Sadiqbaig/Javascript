// Immediately Invoked Function Expressions  (IIFE):

// Directly usage with Database
// Avoid global scope pollution or global variable problem with function.

// function test(){
//     console.log("Database connected");           //Database connected
// }
// test()

// Method to write IIFE function: (function declaring)(function execution)

// IIFE with normal function / named IIFE:
(function test(){
    console.log("Database connected");              //Database connected
})();

// IIFE with arrow function:
( ()=>{
    console.log(`Database connected two `)  ;       //Database connected two 
} )();

( (name)=>{
    console.log(`Database connected two ${name}`)  ;       //Database connected two Sadiq
} )("Sadiq");

