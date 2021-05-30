//Write a code to get the input and print it 5 times.

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
    for(var i = 0; i<5 ; i++){
        console.log(n);
    }
    

});