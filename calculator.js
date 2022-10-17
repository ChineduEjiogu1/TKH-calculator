function add(num, num2)
{
    return num + num2
}

function subtract(num, num2)
{
    return num - num2;
}

function multiply(num, num2)
{
    return num * num2
}

function divide(num, num2)
{
    return num / num2
}

function operate(operator, num, num2)
{
    operator = operator.toLowerCase()

    if(operator === 'add')
        return add(num, num2)
    
    else if(operator === 'subtract')
        return subtract(num, num2)

    else if(operator === 'multiply')
        return multiply(num, num2)
    
    else if(operator === 'divide')
        return divide(num, num2)
    
    else
        return `Error: operator not recognized`
}

let num = 0
let num2 = 0
let operatorButtonVal = ''
let result = 0

function equalsClicked()
{
    // saving the number value of the first input to num1
    num = document.querySelector('#num').value
    //create a variable num2
    num2 = document.querySelector('#num2').value
    // parseInt changes num1 data type to number
    num = parseInt(num)
    num2 = parseInt(num2)

    //next steps 
    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)

    // create values console.log
    console.log(typeof num)
    console.log(typeof num2)
    
    // Wren this is the long way
    // https://www.w3schools.com/jsref/prop_select_selectedindex.asp
    // https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/
    // https://stackoverflow.com/questions/52767068/how-do-i-link-my-javascript-function-to-an-html-element
    // let mathOperators = document.getElementById('operator')
    // if(mathOperators.options[mathOperators.selectedIndex].value === "add")
    //     result = operate('add', num, num2)
    // else if(mathOperators.options[mathOperators.selectedIndex].value === "subtract")
    //     result = operate('subtract', num, num2)
    // else if(mathOperators.options[mathOperators.selectedIndex].value === "multiply")
    //     result = operate('multiply', num, num2)
    // else if(mathOperators.options[mathOperators.selectedIndex].value === "divide")
    //     result = operate('divide', num, num2)
    // else
    //     return 0

    // Wren this is the short way.

    result = operate(operatorButtonVal, num, num2)

    // display result on the page using DOM methods
    document.getElementById("result-num").innerHTML = result
    console.log(result)
}