//for loop:

// for (let i=0;i<=10;i++){
//     console.log(i);
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ,${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop ,${j} and Outer loop ,${i}`);
        // console.log(i + '*' + j+'='+ i*j);
    }
}

let array =["sadiq","wahid","sabir"];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
    
}

//break and continue

// for (let i=0;i<=8;i++){
//     if (i==5) {
//         console.log("5 detected");
//         break;
//     }
//     console.log(`Value of i is ${i}`);  
// }

//output:
// Value of i is 0
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// 5 detected          at 5 it break

// for (let i=0;i<=8;i++){
//     if (i==5) {
//         console.log("5 detected");
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
// }

//output
// Value of i is 0
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// 5 detected               //skip 5
// Value of i is 6
// Value of i is 7
// Value of i is 8

//while:                        ==================================================

// let i=0;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// let arr =["sadiq","wahid","sabir"];
// let myArray=0;
// while (myArray<arr.length) {
//     console.log(arr[myArray]);
//     myArray++;
// }


//do while                      ==================================
// inthis it will run once 

// let score =1;
// do {
//     console.log(`Score is ${score}`);
//     score++;
// } while (score<10);
