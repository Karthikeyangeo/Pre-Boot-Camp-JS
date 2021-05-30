//Print the characters in a string separated by space.
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
    a = userInput[0].split("");
    len = a.length;
    str="";
    for(var i=0;i<len;i++){
        str = str+a[i]+" ";
    }
    str=str.trim();
    console.log(str);
});