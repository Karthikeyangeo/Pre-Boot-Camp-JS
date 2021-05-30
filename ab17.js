// Write a code to get an integer N and print the sum of  values from 1 to N.

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
    var n = userInput;
    sum = 0;
    for(var i=0;i<=n;i++){
        sum = sum + i;
    }
    console.log(sum);

});