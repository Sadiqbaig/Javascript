// for of :                         ===========================

let array=["sadiq","wahid","sabir"];

let arr=[1,2,3,4,5,6];

// for (const i of arr) {
//     console.log(i);
// }

// for (const i of array) {
//     console.log(i);
// }

//Maps:

const map =new Map();

map.set('USA','United');
map.set('IN','India');
map.set('Fr','France');

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key ,':-' ,value);
// }

// for (const key in map) {
//     console.log(key);                                     // not able to run
// }

const myObj ={
    game1 : 'pubg',
    game2 : 'cricket',
    game3 : 'tennis'
}

// in object for ..of is not running

// for (const [key, value] of myObj) {              //error
//     console.log(key ,':-' ,value);
// }

//for in :                                                      =======================
// for (const key in myObj) {
//     console.log(key, myObj[key]);
// }


// for (const i in arr) {
//     console.log(i,arr[i]);          
// }


// for Each                                     ==============================
const code = ['Java','Python','C','Javascript'];

// code.forEach(element => {
//     console.log(element);
// });

// code.forEach( function (item) {
//     console.log(item);
// } )

// function greet (item){
//     console.log(item);
// }

// code.forEach(greet);


// code.forEach ( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const mycode =[
    {
        language:'Javascript',
        learn:'Online'
    },
    {
        language:'Python',
        learn:'Online-Class'
    },
    {
        language:'C',
        learn:'College'
    },
]

mycode.forEach ( (item) => {    
    console.log(item.learn);            
} )

//output:
// Online
// Online-Class
// College

