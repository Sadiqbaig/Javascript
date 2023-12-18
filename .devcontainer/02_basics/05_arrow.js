const user={
    username:"Sadiq",
    price:999,
    welcomePage:function(){
        console.log(`${this.username}, welcome to website`);  
        // console.log(this);      //this refer to current context like inthis it is user(object)
    }

}

// user.welcomePage();                 //Sadiq, welcome to website
// user.username="Baig";
// user.welcomePage();                 //Baig, welcome to website

// console.log(this);              // {} outside the scope this is showing empty

// function test(){
//     let username="sadiq";
//     console.log(this.username);             //this work in object only not in function
// }

// test();                     //undefined


// Arrow function:

// const test= () =>{
//     let username="sadiq";
//     console.log(this.username);             //this work in object only not in function
// }

// test()                          //undefined

// Normal arrow/Explicit return: (When we r using curly braces so need to write return keyword)
// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// implicit return: (no need to write return keyword)
// const addTwo = (num1,num2) => (num1 + num2);         

// const addTwo = (num1,num2) => {username:"Sdaiq"};  // undefined: if there is object so we need to keep in ()
const addTwo = (num1,num2) => ({username:"Sdaiq"});     //{ username: 'Sdaiq' }
console.log(addTwo(1,4));

