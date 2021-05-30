/*You are given a number A in Kilometers. 
Convert this into B: Meters and C: Centi-Metres.
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
    a = parseFloat(userInput[0]);   // getting value in KM
    console.log(a*1000);            // printing value in m
    console.log(a*100000);          // printing value in cm 
            
    console.log(c);
    

});