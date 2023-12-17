// //singleton (which is made from object literal not from cobject onstructor)

// //object constructor
// // Object.create

// // object literal
const sym = Symbol("key1");         // creation of symbol

const user={
    name:"Sadiq",
    "full name":"Sadiq Baig",
    [sym]:"mykey1",                 // symbol to put in object 
    age:24,
    location:"Jaipur",
    email:"sadiqbaig91@gmail.com",
    isLoggedIn:false,
    days:["Monday","Saturday"]
}

// console.log(user.name);
// console.log(user['email']);
// console.log(user["full name"]);      // prefer to use [] notation
// console.log(user[sym]);

// console.log(user);

// Object.freeze(user);            // It will not allowed to edit anything in object "user"


// user.greeting =function(){
//     return("Hello");
// }
// user.greeting2 =function(){
//     return(`Hello,${this.name}`);
// }

// console.log(user.greeting());
// console.log(user.greeting2());

// const tinderUsser = new Object();           // Singleton object
// const tinderUser ={}                    // Non-Singleton object 

// tinderUser.id="123abc";
// tinderUser.name="Sabir";
// tinderUser.isLoggedIn=true;

// console.log(tinderUser);             //{ id: '123abc', name: 'Sabir', isLoggedIn: true }

const regularUser={
    email:"sabir@gmail.com",
    fullname:{
        userName:{
            firstname: "Sabir",
            lastname:"Baig"
        }
    }
}

// console.log(regularUser.fullname.userName.lastname);     // accessing nested object value using dot notation

const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",4:"d"
}

// both are using for combining more than 1 object:
// const obj3= Object.assign(obj1,obj2)
const obj3= {...obj1,...obj2}
// console.log(obj3);                      // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } combining two obj 


const user1=[
    {
        id:1,
        email:"sab@gmail.com"
    },
    {
        id:1,
        email:"sab@gmail.com"
    },
    {
        id:1,
        email:"sab@gmail.com"
    }
]

// console.log(user1[1].email);

const tinderUser ={}                    // Non-Singleton object 

tinderUser.id="123abc";
tinderUser.name="Sabir";
tinderUser.isLoggedIn=true;

// console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));     //[ '123abc', 'Sabir', true ]
// console.log(Object.entries(tinderUser));    //[ [ 'id', '123abc' ], [ 'name', 'Sabir' ], [ 'isLoggedIn', true ] ]
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));       //true


// Destructure of object and api:

const course={
    courseName: "Javascript",
    price: "999",
    instructor:"Online"
}

// course.price

const {instructor:i} =course
console.log(i);

// JSON:

const c={
    "courseName": "Js",
    "price": "free",
    "instructor":"Online"
}

// api fetch will do later
