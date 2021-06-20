//Given a number N, print 'yes' if it is composite else print 'no'.
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
   n = parseInt(userInput);
   let comp = composite(n);
   console.log(comp);
   
   function composite(num)
   {
       let k = num
       let temp=[];
       for(let i=0;i<k;i++)
       {
           if(k%i===0)
           temp.push(i);
       }
       if(temp.length>2)
       {
           return("yes");
       }
       else
       {
           return("no");
       }
   }
   
});