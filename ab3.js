/*You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

(A and B are natural numbers)
Getting input via STDIN*/

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    a = parseFloat(userInput[0]);
    b = parseFloat(userInput[1]);
    c = a*b;
    console.log(c);
    

});