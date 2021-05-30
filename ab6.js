/*You are provided with a number "N", 
Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

(Print "Error" if N = negative value and 0 if N = 0).
Getting input via STDIN*/

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    n = parseInt(userInput);
    if(n >0){
        console.log(n*n);
    }
    else if(n==0){
        console.log(0);
    }
    else{
        console.log("Error")
    }

});