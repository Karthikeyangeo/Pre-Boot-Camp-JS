//Write a program to get a string as input and reverse the string without using temporary variable.
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
    var val = userInput[0].split("");
    val = val.reverse()
    val = val.join("")
    console.log(val);
});