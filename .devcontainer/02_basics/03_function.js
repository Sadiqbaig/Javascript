function addTwoNumber(num1,num2){
    console.log(num1+num2);
}

// addTwoNumber(2,4)           //6
// addTwoNumber(2,"4")         //24

function addTwoNumber(num1,num2){

    let result= num1+num2;
    return result;
}

// console.log(addTwoNumber(2,6));

// function loginUser(username){
//     return (`${username} just login`)
// }

// console.log(loginUser("Sadiq"));                //Sadiq just login
// console.log(loginUser(""));                         // just login
// console.log(loginUser());                           //undefined just login

function loginUser(username){
    if(username===undefined){                          // '!username' both are same
        console.log("Please enter username");
        return;
    }
    return (`${username} just login`)
}

// console.log(loginUser());

// We can give default value to avoid undefined case
function loginUser(username="Sam"){
        return (`${username} just login`)           
    }


// console.log(loginUser());                    //Sam just login

function calculatePrice(...num1){               //spread or rest operator: on use case it convert operator
    return num1;
}

// console.log(calculatePrice(200,300,500,2000));

function calculatePrice(val1,val2,...num1){               //spread or rest operator: on use case it convert operator
    return num1;                                        //val1=200,val2=300,num1=[500,2000]
}
// console.log(calculatePrice(200,300,500,2000));

const user={
    username:"Sadiq",
    price:200
}

function handleObject(anyObject){
    console.log(`Username is- ${user.username} and price is ${user.price}`);
}

// handleObject(user)                  //Username isSadiq and price is 200

const arr=[1,4,6,3,9];
function handleArray(getArray){
    console.log(getArray[2]);
}

// handleArray(arr)            //6