const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let CalculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    currentNumber = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    currentNumber += number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number 
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (CalculationOperator === '') {
        prevNumber = currentNumber
    }
    CalculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})

const calculate = () => {
    let result = ''
    switch(CalculationOperator) {
        case "+":
            result = prevNumber + currentNumber
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break        
    }
    currentNumber = result
    CalculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign') 

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(CalculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
    }
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    CalculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDeceimal(event.target.value)
    updateScreen(currentNumber)
})

inputDeceimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
