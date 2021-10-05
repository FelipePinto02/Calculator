window.addEventListener('keydown', function(e) {
    if(e.key >= 0 && e.key <= 9){
        if(toOperate.operator == '') {
            if(typeof num1 == 'number') {
                num1 = ''
                if(e.key === '0' && displayResult.textContent === '0') {
                    displayResult.textContent = '0'
                    toOperate.a = '0'
                }
                else {
                    num1 = num1 + e.key
                    toOperate.a = num1
                    displayResult.textContent = num1
                }
            }
            else {
                if(e.key === '0' && displayResult.textContent === '0') {
                    displayResult.textContent = '0'
                    toOperate.a = '0'
                }
                else {
                    num1 = num1 + e.key
                    toOperate.a = num1
                    displayResult.textContent = num1
                }
            }  
        }
        else {
            num2 = num2 + e.key
            toOperate.b = num2
            displayResult.textContent = `${num1} ${toOperate.operator} ${num2}`
        }
    }
    else if(e.key == '+' || e.key == '-') {
        if(toOperate.a == '' && toOperate.b == '') {
            return
        }
        else {
            if(toOperate.operator == '') {
                toOperate.operator = e.key
                if(toOperate.a == '') {
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
                else {
                    displayResult.textContent = `${toOperate.a} ${toOperate.operator}`
                }
            }
            else if(toOperate.operator !== '') {
                if(toOperate.b == '') {
                    toOperate.operator = e.key
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
                else {
                    operate()
                    toOperate.operator = e.key
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
            }
        }
    }
    else if(e.key == '/') {
        if(toOperate.a == '' && toOperate.b == '') {
            return
        }
        else {
            if(toOperate.operator == '') {
                toOperate.operator = '÷'
                if(toOperate.a == '') {
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
                else {
                    displayResult.textContent = `${toOperate.a} ${toOperate.operator}`
                }
            }
            else if(toOperate.operator !== '') {
                if(toOperate.b == '') {
                    toOperate.operator = '÷'
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
                else {
                    operate()
                    toOperate.operator = '÷'
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
            }
        }
    }
    else if(e.key == '*') {
        if(toOperate.a == '' && toOperate.b == '') {
            return
        }
        else {
            if(toOperate.operator == '') {
                toOperate.operator = 'x'
                if(toOperate.a == '') {
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
                else {
                    displayResult.textContent = `${toOperate.a} ${toOperate.operator}`
                }
            }
            else if(toOperate.operator !== '') {
                if(toOperate.b == '') {
                    toOperate.operator = 'x'
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
                else {
                    operate()
                    toOperate.operator = 'x'
                    displayResult.textContent = `${num1} ${toOperate.operator}`
                }
            }
        }
    }
    
    else if(e.key === '.' || e.key === ',') {
        turnDecimal()
    }

    else if(e.key === 'Backspace') {
        backspace()
    }
    
    else if(e.key == 'Enter' || '=') {
        if(toOperate.a == '' || toOperate.b == '' || toOperate.operator == '') {
            return
        }
        else {
            operate()
        }
    }

    
})