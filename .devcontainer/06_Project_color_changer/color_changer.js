// ### Method 1 using normal function and switch case:

// let button = document.querySelectorAll('.button');
// // console.log(button);
// let body = document.querySelector('body')
// // console.log(body);

// button.forEach(function (b1) {
//     b1.addEventListener('click', function (e) {
//         console.log(e)
//         console.log(e.target)
//         let color = b1
//         switch (color) {
//             case grey:
//                 body.style.backgroundColor = 'grey';
//                 break;
//             case white:
//                 body.style.backgroundColor = 'white';
//                 break;
//             case blue:
//                 body.style.backgroundColor = 'blue';
//                 break;
//             case yellow:
//                 body.style.backgroundColor = 'yellow';
//                 break;
//             default:
//                 console.log('Invalid color');
//                 break;
//         }
//     })
// });


// ### Method 2 using if condition , arrow function :

let buttons = document.querySelectorAll('.button');
// console.log(buttons);
let body = document.body
// console.log(body);

buttons.forEach( (b)=>{
    // console.log(b);
    b.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

        if (e.target.id==='grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id==='white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id==='blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id==='yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id==='purple') {
            body.style.backgroundColor = e.target.id
        }
    })
})