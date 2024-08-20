const displayBox = document.querySelector('.displayBox');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const division = document.querySelector('#division');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multi = document.querySelector('#multi');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const minus = document.querySelector('#minus');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const addition = document.querySelector('#addition');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');

let number1 = '';
let number2 = '';
let operator = '';
let result;
let operators = operator.charAt(0);
 
seven.addEventListener("click", function () {
    displayBox.innerHTML += '7';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '7';
    } else {
        number1 += '7';
    }
})

eight.addEventListener("click", function () {
    displayBox.innerHTML += '8';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '8';
    } else {
        number1 += '8';
    }
})

nine.addEventListener("click", function () {
    displayBox.innerHTML += '9';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '9';
    } else {
        number1 += '9';
    }
})

four.addEventListener("click", function () {
    displayBox.innerHTML += '4';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '4';
    } else {
        number1 += '4';
    }
})

five.addEventListener("click", function () {
    displayBox.innerHTML += '5';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '5';
    } else {
        number1 += '5';
    }
})

six.addEventListener("click", function () {
    displayBox.innerHTML += '6';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '6';
    } else {
        number1 += '6';
    }
})

one.addEventListener("click", function () {
    displayBox.innerHTML += '1';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '1';
    } else {
        number1 += '1';
    }
})

two.addEventListener("click", function () {
    displayBox.innerHTML += '2';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '2';
    } else {
        number1 += '2';
    }
})

three.addEventListener("click", function () {
    displayBox.innerHTML += '3';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '3';
    } else {
        number1 += '3';
    }
})

zero.addEventListener("click", function () {
    displayBox.innerHTML += '0';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '0';
    } else {
        number1 += '0';
    }
})

point.addEventListener("click", function () {
    displayBox.innerHTML += '.';
    if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
        number2 += '.';
    } else {
        number1 += '.';
    }
})

clear.addEventListener("click", function () {
    displayBox.innerHTML = '';
    number1 = '';
    number2 = '';
    operator = '';
})

division.addEventListener("click", function () {
    if (number1 && number2 && operator == '/') {
        number1 = parseFloat(number1) / parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '*') {
        number1 = parseFloat(number1) * parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '-') {
        number1 = parseFloat(number1) - parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '+') {
        number1 = parseFloat(number1) + parseFloat(number2)
        number2 = ''
    }
    displayBox.innerHTML += '÷';
    operator = '/';
})

multi.addEventListener("click", function () {
    if (number1 && number2 && operator == '/') {
        number1 = parseFloat(number1) / parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '*') {
        number1 = parseFloat(number1) * parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '-') {
        number1 = parseFloat(number1) - parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '+') {
        number1 = parseFloat(number1) + parseFloat(number2)
        number2 = ''
    }
    displayBox.innerHTML += 'x';
    operator = '*';
})

minus.addEventListener("click", function () {
    if (number1 && number2 && operator == '/') {
        number1 = parseFloat(number1) / parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '*') {
        number1 = parseFloat(number1) * parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '-') {
        number1 = parseFloat(number1) - parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '+') {
        number1 = parseFloat(number1) + parseFloat(number2)
        number2 = ''
    }
    displayBox.innerHTML += '-';
    operator = '-';
})

addition.addEventListener("click", function () {
    if (number1 && number2 && operator == '/') {
        number1 = parseFloat(number1) / parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '*') {
        number1 = parseFloat(number1) * parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '-') {
        number1 = parseFloat(number1) - parseFloat(number2)
        number2 = ''
    }
    else if (number1 && number2 && operator == '+') {
        number1 = parseFloat(number1) + parseFloat(number2)
        number2 = ''
    }
    displayBox.innerHTML += '+';
    operator = '+';
})

equal.addEventListener("click", function () {
    console.log("num 1: "+ (parseFloat(number1)))
    console.log("num 2: "+ (parseFloat(number2)))
    switch(operator) {
        case '/':
            displayBox.innerHTML = parseFloat(number1) / parseFloat(number2)
            break
        case '*':
            displayBox.innerHTML = parseFloat(number1) * parseFloat(number2)
            break
        case '-':
            displayBox.innerHTML = parseFloat(number1) - parseFloat(number2)
            break
        case '+':
            displayBox.innerHTML = parseFloat(number1) + parseFloat(number2)
            break
    }
    operator = '';
    number1 = displayBox.innerHTML;
    number2 = '';
})

back.addEventListener("click", function () { 
    if (number1 && operator) {
        number2 = number2.slice(0,-1)
        displayBox.innerHTML = displayBox.innerHTML.slice(0, -1);
        console.log("sliced")

    }
    else if (!number2) {
        number1 = number1.slice(0,-1)
        displayBox.innerHTML = displayBox.innerHTML.slice(0, -1);
        console.log("what")
        

    }

})






