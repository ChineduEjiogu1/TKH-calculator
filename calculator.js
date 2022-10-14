function addition(num, num2)
{
    return num + num2
}

// console.log(addition(213489, 48378))

function subtraction(num, num2)
{
    return num - num2;
}

// console.log(subtraction(34200, 4478))

function multiplication(num, num2)
{
    return num * num2
}

// console.log(multiplication(3550, 478))

function division(num, num2)
{
    return num / num2
}

// console.log(division(23993, 388))

function operate(operator, num, num2)
{
    operator = operator.toLowerCase()

    if(operator === 'add')
        return addition(num, num2)
    
    else if(operator === 'subtract')
        return subtraction(num, num2)

    else if(operator === 'multiply')
        return multiplication(num, num2)
    
    else if(operator === 'divide')
        return division(num, num2)
    
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
    // parseInt changes num1 data type to number
    num = parseInt(num)

    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)

    //next steps 

    //create a variable num2
    num2 = document.querySelector('#num2').value
    num2 = parseInt(num2)

    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)
    // create values console.log
    console.log(num)
    console.log(num2)

    // connect math functions
    // https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/
    // https://stackoverflow.com/questions/52767068/how-do-i-link-my-javascript-function-to-an-html-element
    if(document.getElementById('operator').options[document.getElementById('operator').selectedIndex].value === "add")
        result = operate('add', num, num2)
    else if(document.getElementById('operator').options[document.getElementById('operator').selectedIndex].value === "subtract")
        result = operate('subtract', num, num2)
    else if(document.getElementById('operator').options[document.getElementById('operator').selectedIndex].value === "multiply")
        result = operate('multiply', num, num2)
    else if(document.getElementById('operator').options[document.getElementById('operator').selectedIndex].value === "divide")
        result = operate('divide', num, num2)
    else
        return 0

    // display result on the page using DOM methods
    // needs num and num2
    document.getElementById("result-num").innerHTML = result
    console.log(result)
}

// console.log(operate('add', 1, 5))
// console.log(operate('subtract', 1, 5))
// console.log(operate('multiply', 3, 5))
// console.log(operate('divide', 5, 28))

// function operate(num)