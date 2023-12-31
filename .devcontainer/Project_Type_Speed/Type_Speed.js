const arr = [
    'JS is a programming language and core technology of the World Wide Web alongside HTML and CSS',
    'JavaScript is the world most popular programming language',
    'JavaScript is the programming language of the Web',
    'This tutorial will teach you JavaScript from basic to advanced'
];

let btn = document.querySelector('#btn');

let msg = document.querySelector('#msg');

let typeWords = document.querySelector('#mywords');
let startTime, endTime;

let playGame = () => {
    let randomNum = Math.floor(Math.random() * arr.length);
    msg.innerText = arr[randomNum];
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = 'Done'
}
btn.addEventListener('click', function (e) {
    if (e.target.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    } else if (e.target.innerText == 'Done') {
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime - startTime) / 1000)

        let wordCount = typeWords.value.split(' ').length
        let speed = Math.round((wordCount / totalTime) * 60);

        let finalMsg = `You typed at ${speed} words per minute.`
        msg.innerHTML = finalMsg;

        btn.innerHTML=`Start`;
        typeWords.value = ''

    }
})