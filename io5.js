//Print the integers in a single line separate by space.
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
    str="";
    for(i=0; i<userInput.length; i++){
        str = str + userInput[i]+" ";
    }
    console.log(str.trim());
});