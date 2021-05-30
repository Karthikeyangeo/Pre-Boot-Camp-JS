/*Write a code to get the input in the given format and print the output in the given format
2 5
2 5 6
2 4 5
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
    str="";
    for(i=0; i<userInput.length;i++){
        a=userInput[i].split(" ");
        for(j=0;j<a.length;j++){
            str = str+a[j]+" ";
        }
        console.log(str.trim());
        str="";
    }

});