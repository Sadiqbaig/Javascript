let feet = document.querySelector('#feet');
let inch =document.querySelector('#inch');

feet.addEventListener('input',function(){
    // console.log(this.value);
    let f = this.value;
    let i = f*12;
    inch.value = i
})

inch.addEventListener('input',function(){
    // console.log(this.value);
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
        feet.value = f;
})
