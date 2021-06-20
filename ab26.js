/*
You are given the coefficients of a quadratic equation in order A, B & C.
Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.
Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.
Write a program to find all of the roots of the quadratic.
Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

Sample Input :
1 5 6
*/
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let val = userInput[0].split(" ");
    let a = parseFloat(val[0]).toFixed(2);
    let b = parseFloat(val[1]).toFixed(2);
    let c = parseFloat(val[2]).toFixed(2);
    
    
    //Formula   X1 = {-b + √(b² - 4ac) }/2a  x2 & {-b-√(b² -4ac)} / 2a
    let temp1 = (Math.sqrt(Math.pow(b,2)-4*a*c))        //calculating √(b² - 4ac)
    let x1 = (-b + temp1)/(2*a);
    let x2 = (-b-temp1)/(2*a);
    console.log(x1.toFixed(2));
    console.log(x2.toFixed(2));
});