var input=document.querySelector('input');
let userInput="";

function calculate(value) {
    
    if (value.target.innerHTML === '='){
        userInput = eval(userInput);
        input.value=userInput;
    }

    else if (value.target.innerHTML === 'C'){
        userInput="";
        input.value=userInput;
    }

    else{
        userInput = userInput + value.target.innerHTML;
        input.value=userInput;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', calculate);
});
