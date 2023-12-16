const name= 'Sadiq-B';
const count=50;

console.log(`Hello my name is ${name} and my count is ${count}`);

console.log(name.__proto__);            // see the object property

console.log(name.length);               //5
console.log(name.toUpperCase());        //SADIQ
console.log(name.charAt(2));            //d
console.log(name.indexOf('a'));         //1
console.log(name.substring(0,3));       //Sad
console.log(name.slice(0,4));           //Sadi
console.log(name.trim());               //Remove unwanted space
console.log(name.replace('i','b'));     //Sadbq-B
console.log(name.includes('q'));        //true
console.log(name.split('-'));           //[ 'Sadiq', 'B' ]

