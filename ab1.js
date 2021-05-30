/*Print the First 3 multiples of the given number "N". (N is a positive integer)

Note: print the characters with a single space between them.
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
    num = parseInt(userInput);
    console.log(num,num*2,num*3)

});