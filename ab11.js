/*You are given with a number A i.e. the temperature in Celcius. 
Write a program to convert this into Fahrenheit. 
Note: In case of decimal values, round-off to two decimal places.

Getting input via STDIN
Celcius to Farenheit */

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var c = parseFloat(userInput);
    var f = (c*1.8)+32;
    f = (f.toFixed(2));
    console.log(f);
});