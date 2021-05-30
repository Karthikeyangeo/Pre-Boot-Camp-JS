/*You are given Two Numbers, A and B. If C = A + B. Find C.

Note: Round off the output to a single decimal place.
Getting input via STDIN */

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    a = parseInt(userInput[0]);
    b = parseInt(userInput[1]);
    c = a+b;
    console.log(c);
    

});