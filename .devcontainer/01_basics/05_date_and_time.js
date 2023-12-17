let myDate = new Date()
console.log(myDate);                //2023-12-17T06:37:41.397Z
console.log(typeof myDate);            //object

console.log(myDate.toString());      //Sun Dec 17 2023 06:37:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());     //Sun Dec 17 2023
console.log(myDate.toLocaleString());   //12/17/2023, 6:37:41 AM


// We can give manual date and time to create:

let d= new Date(2023,1,14);
console.log(d.toDateString());                 //Tue Feb 14 2023

// To get live time:
let now= Date.now()
console.log(now);               //1702795368444 milli second

let d1= new Date(2023,1,14);
console.log(d1.getTime());       // 1676332800000

let n1= Date.now();
console.log(Math.floor(n1/1000));       //1702796098   in second

console.log(myDate.getMonth()+1);       //12