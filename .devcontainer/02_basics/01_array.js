// Array ============================================>
// Change the original array
const arr =[1,0,8,5,7,4];

// arr.push(5);
// console.log(arr);           //[1,0,8,5,7,4,5];

// arr.unshift(2);
// console.log(arr);           //[2,1,0,8,5,7,4];

// arr.pop();
// console.log(arr);           //[1,0,8,5,7,4];

// arr.shift();
// console.log(arr);           //[1,0,8,5,7,4];

// let a= arr.join('');
// console.log(typeof a);           // typeof string

// // slice

// console.log("A ", arr);             //A  [ 1, 0, 8, 5, 7, 4 ]
// const s_arr= arr.slice(1,4);
// console.log(s_arr);                 //[ 0, 8, 5 ]
// // When we check for the orginal array after using slice it will give the original array.

// //splice
// console.log("B ", arr);             //B  [ 1, 0, 8, 5, 7, 4 ]
// const sp_arr= arr.splice(1,4);
// console.log(sp_arr);                //[ 0, 8, 5, 7 ]

// console.log("C ", arr);             //C  [ 1, 4 ]

// When we check for the orginal array after using splice it will give the remaning portion of splice which was not used.


const userName =["Sadiq","Wahid","Sabir"];
const profile =["Engineer","BAF","HSC"];

// console.log(userName.concat(profile));             //[ 'Sadiq', 'Wahid', 'Sabir', 'Engineer', 'BAF', 'HSC' ]

// console.log([...userName,...profile]);              //[ 'Sadiq', 'Wahid', 'Sabir', 'Engineer', 'BAF', 'HSC' ]

const array=[1,3,2,[0,9],3,[9,0,0,[1,2]]];
const real = array.flat(Infinity);
// console.log(real);          // [1, 3, 2, 0, 9,3, 9, 0, 0, 1,2]

// covert string into array:
// console.log(Array.from("Sadiq"));               //[ 'S', 'a', 'd', 'i', 'q' ]

let s1 =100;
let s2 =200;
let s3 =300;

console.log(Array.of(s1,s2,s3));                //[ 100, 200, 300 ] Combine all value in one array
