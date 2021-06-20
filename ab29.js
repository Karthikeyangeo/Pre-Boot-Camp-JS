
/*You are given three numbers A, B & C. 
Print the largest amongst these three numbers.
Sample Input :
1
2
3

 Getting input via STDIN
 */

 const readline = require("readline");

 const inp = readline.createInterface({
   input: process.stdin
 });
 
 const userInput = [];
 
 inp.on("line", (data) => {
   userInput.push(data);
 });
 
 inp.on("close", () => {
     a = +userInput[0];
     b = +userInput[1];
     c = +userInput[2];
     if((a >b) && (a>c))
     {
         console.log(a);
     }
     else if (b>c)
     {
         console.log(b);
     }
     else
     {
         console.log(c);
     }
 });