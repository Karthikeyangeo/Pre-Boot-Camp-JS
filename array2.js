/*You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.
All number are unique.

Input Description:
First line contains a number ‘n’. Then next line contains n space separated numbers.

Output Description:
Print the difference of indices of largest and smallest array

Sample Input :
5
1 6 4 0 3
Sample Output :
-2
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
    var n = parseInt(userInput[0]);
    var myArray = userInput[1].split(" ");
    for(let i=0;i<n;i++)
    {
         myArray[i]=parseInt(myArray[i]);
    }
    let max_num = Math.max(...myArray); //finding max number
    let max_ind = myArray.indexOf(max_num); //finding index of  max number
    let min_num = Math.min(...myArray); //finding min number
    let min_ind = myArray.indexOf(min_num); //finding index of  min number
    let diff = max_ind - min_ind;
    console.log(diff);
    
});