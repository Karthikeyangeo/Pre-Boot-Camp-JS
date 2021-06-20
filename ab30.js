
//Write a code get an integer number as input and print the sum of the digits.
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
    var n = userInput[0].split("");
    var sum = 0;
    for(var i=0;i<n.length;i++)
    {
        sum += +n[i];
    }
    console.log(sum);
});