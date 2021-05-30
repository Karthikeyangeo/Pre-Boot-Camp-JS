/*Write a code to get 2 integers A and N. 
Print the integer A, N times in separate line.
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
    var val = userInput[0].split(" ");
    var a = val[0];
    var n = val[1];
    for(var i=0;i<n;i++){
        console.log(a);
    }

});