/*Write a code get an integer number as input 
 print the odd and even digits of the number separately after sorting it
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
    var n = userInput[0].split("");
    var odd="";
    var even="";
    for(var i =0;i<n.length;i++){
        r = n[i] % 2;
        if (r===0){
            even += n[i]+" ";
        }
        else if(r!==0){
            odd += n[i]+" ";
        }
    }
    even =even.split("").sort().join(" ");
    odd = odd.split("").sort().join(" ");
    console.log(even.trim());
    console.log(odd.trim());
});