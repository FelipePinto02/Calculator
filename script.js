const result = document.querySelector('.result')
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

aritmeticOperators.forEach((aritmeticOperator) => {
    aritmeticOperator.addEventListener('click', () => {
        toOperate.operator = aritmeticOperator.value
    })
})

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(toOperate['operator'] === '') {
            digitSelected = digit.value
            num1 = num1 + digitSelected
            toOperate.a = num1
        }
        else if(toOperate['operator'] !== '') {
            digitSelected = digit.value
            num2 = num2 + digitSelected
            toOperate.b = num2
        }
    })
})

function operate() {
    a = parseInt(toOperate['a'])
    b = parseInt(toOperate['b'])
    operator = toOperate['operator']

    if (operator == '+') {
        const equal = add(a, b)
        result.textContent = `${equal}`
        clearResult()
        return(equal)
    }
    if (operator === '-') {
        const equal = substract(a, b)
        result.textContent = `${equal}`
        clearResult()
        return(equal)
    }
    if (operator === '*') {
        const equal = multiply(a, b)
        result.textContent = `${equal}`
        clearResult()
        return(equal)
    }
    if (operator === '/') {
        const equal = divide(a, b)
        result.textContent = `${equal}`
        clearResult()
        return(equal)
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