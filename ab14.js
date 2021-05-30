/*Let "A"  be a string. 
Remove all the whitespaces and find it's length.
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
    var a = userInput;
    var temp = userInput[0].split("");
    var count = 0;
    for(var i=0;i<temp.length;i++){
        if(temp[i] !==" "){
            count+= 1;
        }
    }
    console.log(count);

});