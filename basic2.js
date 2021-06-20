/*Find the minimum among 10 numbers.
INPUT
5 4 3 2 1 7 6 10 8 9
// Getting input via STDIN*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0].split(" ");
    console.log(str);
    let temp =0;
    
    for(let i = 1 ;i<str.length;i++)
    {
        str[i] = +str[i];
        if(str[i-1] < str[i])
        {
            temp = str[i-1];
        }
        else{
            temp = str[i];
        }
    }
    console.log(temp);
    
    
});