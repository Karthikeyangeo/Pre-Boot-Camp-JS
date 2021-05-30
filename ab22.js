/*
Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)
9 18 27...
Print NULL if 0 is input

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
    var n = parseInt(userInput);
    var temp = 1;
    var str=[];
    if(n!==0){
        for (var i=1;i<=n;i++){
            temp = 9*i;
            str += temp +" ";
        }
    console.log(str.trim());
    }
    else{
        console.log(0);
    }
    
    
});