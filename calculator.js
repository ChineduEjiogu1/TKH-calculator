function addition(num, num2)
{
    return num + num2
}

console.log(addition(213489, 48378))

function subtraction(num, num2)
{
    return num - num2;
}

console.log(subtraction(34200, 4478))

function multiplication(num, num2)
{
    return num * num2
}

console.log(multiplication(3550, 478))

function division(num, num2)
{
    return num / num2
}

console.log(division(23993, 388))

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

function equalsClicked()
{
    // saving the number value of the first input to num1
    num = document.querySelector('#num').value
    // parseInt changes num1 data type to number
    num = praseInt(num)

    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)

    //next steps 

    //create a variable num2
    // create values console.log
    //connect math functions
    //display result on the page using DOM methods
}

console.log(operate('add', 1, 5))
console.log(operate('subtract', 1, 5))
console.log(operate('multiply', 3, 5))
console.log(operate('divide', 28, 5))

function operate(num)