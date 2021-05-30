//You are provided with a number, "N". Find its factorial.
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
    var n = parseInt(userInput);
    var fact = 1;
    if(n!=1){
        while(n!=1){
            fact = fact * n;
            n = n-1;
        }
        console.log(fact);
    }
    else if(n==1){
        console.log(1);
    }

});