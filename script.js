const displayResult = document.querySelector('.display-result')
const aritmeticOperators = document.querySelectorAll('#aritmetic-operator')
const digits = document.querySelectorAll('#digit')
const equalOperator = document.querySelector('#equal-operator').addEventListener('click', operate)
const clearBtn = document.querySelector('#clear-btn').addEventListener('click',clearResult)
const decimalBtn = document.querySelector('#decimal-btn').addEventListener('click', turnDecimal)
const percentageBtn = document.querySelector('#percentage-btn').addEventListener('click', percentage)
const positiveNegativeBtn = document.querySelector('#positive-negative-btn').addEventListener('click', positiveNegative)
const backspaceBtn = document.querySelector('#backspace-btn').addEventListener('click', backspace)
let num1 = ''
let num2 = ''
let toOperate = {
    a: '',
    b: '',
    operator: '',
}

aritmeticOperators.forEach((aritmeticOperator) => {
    aritmeticOperator.addEventListener('click', () => {
        if(toOperate.a == '' && toOperate.b == '') {
            toOperate.operator == ''
        }
        else {
            if(toOperate.operator == '') {
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
                    operate()
                    toOperate.operator = aritmeticOperator.value
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
            }
        }
    })
})

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(toOperate.operator === '') {
            if(typeof num1 === 'number') {
                num1 = ''
                digitSelected = digit.value
                if(digitSelected === '0' && displayResult.textContent === '0') {
                    displayResult.textContent = '0'
                    toOperate.a = '0'
                }
                else {
                    num1 = num1 + digitSelected
                    toOperate.a = num1
                    displayResult.textContent = num1
                }
            }
            else {
                digitSelected = digit.value
                if(digitSelected === '0' && displayResult.textContent === '0') {
                    displayResult.textContent = '0'
                    toOperate.a = '0'
                }
                else {
                    num1 = num1 + digitSelected
                    toOperate.a = num1
                    displayResult.textContent = num1
                }
            }
        }
        else if(toOperate.operator !== '') {
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
    if(toOperate.b == '') {
        toOperate.b = toOperate.a
    }
    a = parseFloat(toOperate.a)
    b = parseFloat(toOperate.b)
    operator = toOperate['operator']

    if(b === 0 && operator === '÷') {
        clearResult()
        displayResult.textContent = 'Error'
    }
    else {
        if (operator == '+') {
            const result = add(a, b)
            displayResult.textContent = `${result}`
            toOperate.a = result
            num1 = result
            toOperate.operator = ''
            toOperate.b = ''
            num2 = ''
        }
        if (operator === '-') {
            const result = substract(a, b)
            displayResult.textContent = `${result}`
            toOperate.a = result
            num1 = result
            toOperate.operator = ''
            toOperate.b = ''
            num2 = ''
        }
        if (operator === 'x') {
            const result = multiply(a, b)
            displayResult.textContent = `${result}`
            toOperate.a = result
            num1 = result
            toOperate.operator = ''
            toOperate.b = ''
            num2 = ''
        }
        if (operator === '÷') {
            const result = divide(a, b)
            displayResult.textContent = `${result}`
            toOperate.a = result
            num1 = result
            toOperate.operator = ''
            toOperate.b = ''
            num2 = ''
        }
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
    displayResult.textContent = '0'
    toOperate = {
        a: '',
        b: '',
        operator: '',
    }
}

function turnDecimal() {
    if(toOperate.operator == '') {
        if(num1.includes('.')) {
            num1 = num1
            toOperate.a = num1
            displayResult.textContent = num1
        }
        else {
            num1 = num1 + '.'
            toOperate.a = num1
            displayResult.textContent = num1
        }
    }
    else {
        if(num2.includes('.')) {
            num2 = num2
            toOperate.b = num2
            displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
        }
        else {
            num2 = num2 + '.'
            toOperate.b = num2
            displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
        }
        
    }
}

function percentage() {
    if(toOperate.operator == '') {
        num1 = num1/100
        toOperate.a = num1
        displayResult.textContent = num1
    }
    else {
        num2 = num1 * num2/100
        toOperate.b = num2
        displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
    }
}

function positiveNegative() {
    if(typeof num1 == 'number') {
        num1 = num1*-1
        toOperate.a = num1
        displayResult.textContent = num1
    }
    else {
        if(toOperate.operator == '') {
            if(num1.includes('-')) {
            num1 = num1.replace('-', '')  
            toOperate.a = num1
            displayResult.textContent = num1
        }
        else {
            num1 = '-' + num1
            toOperate.a = num1
            displayResult.textContent = num1
        }
    }
    else {
        if(num2.includes('-')) {
            num2 = num2.replace('-', '')  
            toOperate.b = num2
            displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
        }
        else {
            num2 = '-' + num2
            toOperate.b = num2
            displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
        }
    }
}
}

function backspace() {
    if(typeof num1 === 'number' && num2 === '') {
        return
    }
    else if(toOperate.operator == '') {
        num1 = num1.slice(0, -1)
        toOperate.a = num1
        displayResult.textContent = num1
    }
    else {
        num2 = num2.slice(0, -1)
        toOperate.b = num2
        displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
    }
}