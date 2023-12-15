const nameId = 1443;
let email = "sadiqbaig91@gmail.com";
var Password ='12345'
City='Mumbai';


// Scope = Boundary

// nameId = 123;  
// console.log(nameId);   // const can neither be updated nor be re-declared (Block scope)

email="chai@gmail.com"
// console.log(email);       // let can be updated but not re-declared (Block scope)

Password="78990";
// console.log(Password);      // var can be updated and re-declared (Global scope)[It will change in whole code where it is used]

City='Pune';
// console.log(City);

//Shortcut to print all console in one 

console.log([nameId,email,Password,City]);

/*
    Prefer not to use var bcoz of scope 
*/

let State;    // We can declared as undefined
console.log(State);

