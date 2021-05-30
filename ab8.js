//You are given with a number "N", find its cube.

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
    var n = parseFloat(userInput);
    var cube =Math.pow(n,3);
    console.log(cube);

});