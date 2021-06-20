/*Write a code to get 2 integers as input
and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

HCF calculation refer : https://www.faceprep.in/quantitative-aptitude/methods-to-find-hcf-and-lcm/

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
    let given = userInput[0].split(" ");    //getting input
    let a = +given[0];
    let b = +given[1];
    let diff = Math.abs(a-b); //finding the diff bw 2 number & change to abs value
    let factors=[];
    for(let i=1;i<=diff;i++)    // finding factors of difference
    {
        if(diff%i ===0)         // finding prime numbers
        {
            factors.push(i);
        }
    }
    let len = factors.length;       // factor length
    


    if((a%diff ===0 ) && (b % diff===0))
    {
        console.log(diff);
    }
    else
    {
       for(let j=len; j>=0;j--)
       {
           let temp = factors[j];
           if((a%temp ===0 ) && (b % temp===0))
           {
               console.log(temp);
               break;
           }
           
       }
    }
});