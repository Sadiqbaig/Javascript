// Condition 

// if :

// const isUserLogin = "yes";

// if(isUserLogin=="yes"){
//     console.log("OK, you are logged in");
// }

// // <,>,<=,>=,==,!=,===

// if(2==='2'){
//     console.log("equal");                       // not run due to datatype
// }


// if(2==='2'){
//     console.log("equal");                       // not run due to datatype
// }else{
//     console.log("Not equal");                   //Not equal
// }

// const score =200;

// if (score>100){
//     const power ="fly";
//     console.log(`User Power: ${power}`);         // fly
// }

// console.log(`User Power: ${power}`);   //error

// const balance =1000;
// // if(balance>500) console.log("test");                        //test


// if(balance>500){
//  console.log("less than 500");    
// }else if(balance<500){
//     console.log("greater than 500");   
// }else{
//     console.log("equal to 500"); 
// }         

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoggle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}

if(loggedInFromGoggle || loggedInFromEmail){
    console.log("You can log in");
}