/*
Write a code to get the input in the given format and print the output in the given format.
First-line indicates two integers separated by space. Second-line indicates two integers separated by space. 
Third-line indicates two integers separated by space.
Sample Input :
2 4
2 4
2 4 */
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
    var str="";
    for(var i =0 ; i<userInput[i].length ; i++){
        a = userInput[i].split(" ");
        for(var j = 0; j<a.length;j++){
            str = str + a[j]+" ";
        }
        console.log(str.trim())
        str="";
    }

});