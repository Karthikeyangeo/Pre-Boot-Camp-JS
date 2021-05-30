//Print the float value separated by line.
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
    a=userInput[0].split(" ");
    for(i=0;i<a.length;i++){
        console.log(a[i])
    }

});