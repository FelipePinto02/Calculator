const result = document.querySelector('.result')
const aritmeticOperators = document.querySelectorAll('#aritmetic-operator')
const equalOperator = document.querySelector('#equal-operator')

equalOperator.addEventListener('click', operate)

aritmeticOperators.forEach((aritmeticOperator) => {
    aritmeticOperator.addEventListener('click', () => {
        obj.operator = aritmeticOperator.value
    })
})



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

function operate(obj) {
    a = obj['a']
    b = obj['b']
    operator = obj['operator']

    if (operator == '+') {
        const equal = add(a, b)
        result.textContent = `${equal}`
        return(equal)
    }
    if (operator === '-') {
        const equal = substract(a, b)
        return(equal)
    }
    if (operator === '*') {
        const equal = multiply(a, b)
        return(equal)
    }
    if (operator === '/') {
        const equal = divide(a, b)
        return(equal)
    }
}

