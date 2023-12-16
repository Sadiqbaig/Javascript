"use strict";  // treat this as all JS code as newer version

// alert("hello");   // We are using node.js not browser

// Code readablity should be must high

// How data are written in memory and accessing data:

// Primitive Datatype  (Call by a value)

// Example                       value                type

let name="Sadiq";               // String             string
let age= "24";                  // Number             number
let isLoggedIn= true;           // Boolean            boolean
let population= "10000000000";  // BigInt             bigint
let country;            // undefined [not assigned]   undefined
// null   standalone value [empty]                    object
// Symbol    unique                                   symbol

// Non-Primitive Datatype (Call by a reference)

let obj =new Object;  // Object             object
let arr = new Array;  //Array               object
let funct=function(){}  //function          function object
// ======================================================================================

// let score = "33abc";
// console.log(typeof score);                  string
// let stringInNumber = Number(score)
// console.log(typeof stringInNumber);          number
// console.log(stringInNumber);                 NaN


// let score = null;
// console.log(typeof score);                   object
// let stringInNumber = Number(score)
// console.log(typeof stringInNumber);          number
// console.log(stringInNumber);                    0


// let score = undefined;
// console.log(typeof score);                 undefined
// let stringInNumber = Number(score)          
// console.log(typeof stringInNumber);          number
// console.log(stringInNumber);                 NaN

// ====================================================================================
// Operations:

let val = 3;
let negVal = -val;
// console.log(negVal);     -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str='Sadiq';
let str1='Baig';
// console.log(str+str1);    SadiqBaig

// console.log(1+'2');    12
// console.log('1'+2 +2);  122
// console.log(2+2+'1');    41
// console.log('1'+'2');   12
// console.log(+true);        1
// console.log(+"");       0


// ===============================================Memory================================

// Stack and Heap Memory:

// Stack (Step by Step) => Primitive (Gives a copy)
let user='Sadiq';
let user1 = user;
user1='Baig'

console.log(user);
console.log(user1);

// Heap (Whole) => Non-Primitive (Gives a reference)




