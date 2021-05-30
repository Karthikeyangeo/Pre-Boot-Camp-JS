/*You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. 
Find Simple Interest.
Print the output up to two decimal places (Round-off if necessary).
(S.I. = P*T*R/100)

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
    val = userInput[0].split(" ");
    var p = parseFloat(val[0]);   //principal amount
    var t = parseFloat(val[1]);   // time in years
    var r = parseFloat(val[2]);   // rate of interest
    var si= p*t*r/100;
    console.log(si.toFixed(2));

});