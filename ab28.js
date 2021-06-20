//Write a code to get an integer N and print the digits of the integer.

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
    n = userInput[0].split("");
    str1 = "";
    for(var i=0;i<n.length;i++)
    {
        str1=str1+n[i]+" ";
    }
    str1 = str1.trim();
    console.log(str1);
    
});