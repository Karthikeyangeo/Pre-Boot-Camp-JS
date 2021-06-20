// Write a code to get an integer N and print the values from N to 1.

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
    n =parseInt(userInput);
    for(var i =n ; i>=1;i--)
    {
        console.log(i);
    }
});