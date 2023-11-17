let num1 = +prompt("Enter the first number:")
let num2 = +prompt("Enter the second number:")
let char = prompt("Enter the operator (+, -, *, /, %):")

let add = (a,b) => num1 + num2
let sub = (a,b) => num1 - num2
let mul = (a,b) => num1 * num2
let div = (a,b) => num1 / num2
let remDiv = (a,b) => num1 % num2

if(char === "+") {
    console.log(add(num1,num2))
} else if(char === "-") {
    console.log(sub(num1,num2))
} else if(char === "*") {
    console.log(mul(num1,num2))
} else if(char === "/") {
    console.log(div(num1,num2))
} else if(char === "%") {
    console.log(remDiv(num1,num2))
} else {
    console.log("Invalid operator")
}