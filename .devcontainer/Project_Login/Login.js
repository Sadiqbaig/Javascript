let username = document.querySelector('#username')
let password = document.querySelector('#password')

let button = document.querySelector('#btn')
let flag = 1;
function validateForm (){
    if (username.value=='') {
        document.querySelector('#userError').innerHTML = `Username is empty`
        flag = 0;
    }else{
        document.querySelector('#userError').innerHTML = '';
        flag = 1;
    }
    
    
    if (password.value=='') {
        document.querySelector('#passError').innerHTML = `Password is empty`
        flag = 0;
    }else{
        document.querySelector('#passError').innerHTML = '';
        flag = 1;
    }
    
    if(flag){
        return true;
    }else{
        return false;
    }
}

