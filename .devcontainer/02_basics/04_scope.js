// var c=300;               // var is global scope 
let a=300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER:",a);            // 10
}

// console.log(a);                     //300
// console.log(b);              //error bcoz b is block scope
// console.log(c);              //error bcoz c is block scope

function one(){
    const username="Sadiq";

    function two(){
        const website="Online";
        // console.log(username);
    }
    // console.log(website);

    // two();
}

// one();

// function two can use the variable of parent function but function one cannot use variable of child.

if(true){
    const username="sadiq";
    if(username==="sadiq"){
        const website="Online";
        // console.log(username + website);         //run
    }
    // console.log(website);                //error
}
// console.log(username);               //error

addone(5);                      //run
function addone(num){
    return num+1;
}
addone(5);                      //run

addTwo(5);                    //error (in function expression it will not execute before declaring)
const addTwo = function(num){                 //function expression
    return num+2;
}
addTwo(5);                      //run
