//You are provided with two numbers. Find and print the smaller number.
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
    val=userInput[0].split(" ");
    a = parseFloat(val[0]);
    b = parseFloat(val[1]);
    if(a<b){
        console.log(a);
    }
    else{
        console.log(b);
    }

});