// // const code = ['Java','Python','C','Javascript'];

// const value = code.forEach( (item) => {
//     // console.log(item);
//     // return (item);
// } )

// console.log(value);                         // undefined

// Filter

// const num= [1,2,3,4,5,6,7,8];

// we can assigned this with greater in for each it was not accessible:
// const greater = num.filter( (item) => {
//     return (item > 5);
// } )

// const greater =[];

// num.forEach((item) => {
//     if(item>5){
//         greater.push(item)
//     }
// })
// console.log(greater);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter ( (bk) => {
//     return bk.genre == 'History'
// } )

// let userBooks = books.filter ( (bk) => {
//     return bk.genre == 'History' && bk.publish>= 1990
// } )

// console.log(userBooks);


// Map                              ================================================
const num=[1,2,3,4,5,6,7,8];            //need to assign var as myNum

// let myNum=num.map( (n) =>{
//     return n+10;
// } 

// Chaining of map,filter :

// const newNums = num
//                 .map((n) => n * 10 )
//                 .map( (n) => n + 1)
//                 .filter( (n) => n >= 40)

// console.log(newNums);


// Reduce                                   =======================================
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// let myTotal=myNums.reduce( (acc,curvalue) =>{
//     return acc + curvalue
// },0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let Total = shoppingCart.reduce( (acc,p) =>{
    return acc + p.price;
},0);

console.log(Total);
