/*A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months 
Input Description:
You will be given a number ‘n’->No. of months

Output Description:
Print the total savings at the end of ‘n’ months

Sample Input :
1
Sample Output :
2000*/
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
    var n =userInput[0];    // getting the no of months
    let a =1000;a1=1000;sum=0;
    for(let i=0;i<=n;i++)
    {
        console.log(a1);
        sum = a+a1;
        a1=a;
        sum=a1;
    }
    console.log(sum);
});