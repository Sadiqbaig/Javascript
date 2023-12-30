let inputs = document.getElementById("input");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}`;
        text.appendChild(newEle);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        newEle.appendChild(span);
        inputs.value="";
        newEle.querySelector("span").addEventListener("click" , remove);
        function remove(){
            newEle.remove();
        }
    }
}