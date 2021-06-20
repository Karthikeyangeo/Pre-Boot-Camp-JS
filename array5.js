/* You are given with array of numbers.you have to find whether array is beautiful or not. 
A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5 
Input Description:
You are given a number ‘n’ denoting the size of array.Next line contains n space separated numbers.

Output Description:
Print 1 if array is beautiful and 0 if it is not

Sample Input :
5
5 25 35 -5 30
Sample Output :
1
*/

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
    let n = parseInt(userInput[0]);
    let val = userInput[1].split(" ");
    for(let i=0;i<n;i++)
    {
        val[i] = parseInt(val[i]);
    }
    
    var sum = val.reduce((a,b) => a+b,0)    // adding the elements of array 
    let a2 = (sum %2===0);  //changing to boolean value
    let a3 = (sum %3===0);  //changing to boolean value
    let a5 = (sum %5===0);  //changing to boolean value
    if(a2 && a3 && a5)
    {
        console.log(1);
    }
    else
    {
        console.log(0);
    }

});