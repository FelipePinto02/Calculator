const displayResult = document.querySelector('.display-result')
const aritmeticOperators = document.querySelectorAll('#aritmetic-operator')
const digits = document.querySelectorAll('#digit')
const equalOperator = document.querySelector('#equal-operator').addEventListener('click', operate)
let num1 = ''
let num2 = ''
let toOperate = {
    a: '',
    b: '',
    operator: '',
}
let result = displayResult.textContent

aritmeticOperators.forEach((aritmeticOperator) => {
    aritmeticOperator.addEventListener('click', () => {
        if(toOperate.operator === '') {
            toOperate.operator = aritmeticOperator.value
            if(toOperate.a == '') {
                displayResult.textContent = `${num1} ${toOperate.operator}`
            }
            else {
                displayResult.textContent = `${toOperate.a} ${toOperate.operator}`
            }
        }
        else if(toOperate.operator !== '') {
            if(toOperate.b == '') {
                toOperate.operator = aritmeticOperator.value
                displayResult.textContent = `${num1} ${toOperate.operator}`
            }
            else {
                toOperate.operator = aritmeticOperator.value
                displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
            }
        }
    })
})

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(toOperate['operator'] === '') {
            digitSelected = digit.value
            num1 = num1 + digitSelected
            toOperate.a = num1
            displayResult.textContent = num1
        }
        else if(toOperate['operator'] !== '') {
            digitSelected = digit.value
            num2 = num2 + digitSelected
            toOperate.b = num2
            if(toOperate.a == '') {
                displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
            }
            else {
                displayResult.textContent = `${toOperate.a} ${toOperate.operator} ${num2}`
            }
        }
    })
})

function operate() {
    a = parseInt(toOperate['a'])
    b = parseInt(toOperate['b'])
    operator = toOperate['operator']

    if (operator == '+') {
        const result = add(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        toOperate.operator = ''
        num2 = ''
    }
    if (operator === '-') {
        const result = substract(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        toOperate.operator = ''
        num2 = ''
    }
    if (operator === '*') {
        const result = multiply(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        toOperate.operator = ''
        num2 = ''
    }
    if (operator === '/') {
        const result = divide(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        toOperate.operator = ''
        num2 = ''
    }
}

function chainOperate() {
    a = parseInt(toOperate['a'])
    b = parseInt(toOperate['b'])
    operator = toOperate['operator']

    if (operator == '+') {
        const result = add(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        toOperate.b = ''
        num2 = ''
    }
    if (operator === '-') {
        const result = substract(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        toOperate.b = ''
        num2 = ''
    }
    if (operator === '*') {
        const result = multiply(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        num2 = ''
    }
    if (operator === '/') {
        const result = divide(a, b)
        displayResult.textContent = `${result}`
        toOperate.a = result
        num2 = ''
    }
}

function add(a, b) {
    return(a + b)
}

function substract(a, b) {
    return(a - b)
}

function multiply(a, b) {
    return(a * b)
}

function divide(a, b) {
    return(a / b)
}

function clearResult() {
    num1 = ''
    num2 = ''
    toOperate = {
        a: '',
        b: '',
        operator: '',
    }
    return(toOperate)
}