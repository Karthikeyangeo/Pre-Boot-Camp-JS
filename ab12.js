/*Let "A" be a year.
 write a program to check whether this year is a leap year or not.

Print "Y" if its a leap year and "N" if its a common year.
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
    var year = parseInt(userInput);
    if (year %4===0){
        console.log("Y");
    }
    else{
        console.log("N");
    }

});