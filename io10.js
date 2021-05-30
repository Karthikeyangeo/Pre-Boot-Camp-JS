//Print the characters in a string separated by comma.
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
    var a = userInput[0].split("");
    var str = "";
    var len = a.length;
    for ( var i=0 ; i< len ; i++){
        str = str + a[i] + ",";
        
    }
    console.log(str.substring(0, str.length - 1));
});