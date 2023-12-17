// Number=========================================================:

const num= new Number(100);
console.log(num);                       //100     type is number
console.log(typeof num);                // object

console.log(num.toString());                // 100   type is string
console.log(num.toFixed(2));                //100.00

const num1= 23.67;
console.log(num1.toPrecision(3));           //23.7

const num2 =123.56;
console.log(num2.toPrecision(4));       //123.6

const num3= 1122.78;
console.log(num3.toPrecision(4));       //1123


const hund = 10000000;
console.log(hund.toLocaleString());  // US based        10,000,000
console.log(hund.toLocaleString('en-IN'));  // India based   1,00,00,000



// ============================================Math=================================:


console.log(Math.abs(-4));          //4
console.log(Math.round(4.3));       //4
console.log(Math.round(4.7));       //5
console.log(Math.floor(4.6));       //4
console.log(Math.ceil(4.2));        //5
console.log(Math.min(3,5,2,6,7));       //2
console.log(Math.max(3,5,2,6,7));       //7
console.log(Math.random());             // gives number between 0 to 1

// eg need number between 1 to 10

console.log(Math.floor((Math.random()*10)+1));      // gives number between 1 to 10

// eg: need number between min and max value

const min = 10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1))+min);         // gives number between min and max