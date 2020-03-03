/*
In javascript functions are first class objects

*/

// EXAMPLE 1

let x = function() {
    console.log("i am called from inside a function")
}

let y = function(callback) {
    console.log('do something')
    callback()
}

y(x)

// EXAMPLE 2
// a simple calculator

let calc = function(num1, num2, calcType) {
    if(calcType === 'add') {
        return 'Addition result ' + (num1 + num2 )
    } else if(calcType == 'mul') {
        return 'Multiplication result ' + (num1 * num2)
    }
}

console.log(calc(10,20, 'add'))

/*
but we can implement above function better using callback functions
instead of keeping the logic for addition and multiiplication inside
the function we can bring the logic outside.
*/

let add = function(a, b) {
    return a + b
}
let mul = function(a, b) {
    return a * b
}

calc = function(num1, num2, callback) {
    return callback(num1, num2)
} 

console.log('Addition result : ', calc(10, 20, add))


// EXAMPLE 3
// we don't actually need to define the function outside we can actually pass the defination
// of the function while calling the function itself

console.log('subtraction result : ', calc(10, 20, function(a, b) {
    return a - b
}))



