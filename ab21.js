//Write a code to get an integer N and print the even values from 1 till N in a separate line.

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
    var n = parseInt(userInput);
    for (var i=2;i<=n;i=i+2){
        console.log(i);
    }
});