/*
You are provided with an array in which all elements are repeated thrice except one which is repeated twice.
Your task is to print that number.

Input Description:
First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers

Output Description:
Print the number which is repeated twice

Sample Input :
5
13 12 13 12 13
Sample Output :
12*/

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
  let n = parseInt(userInput[0]); // Length of array 
  let data = userInput[1].split(" ");
  for(let i=0;i<n;i++)
  {
      data[i] = parseInt(data[i]);
  }
  let result =two_time_entry(data);
  console.log(result);
  
  function two_time_entry(arr){
      let count=[];
      let len = arr.length;
      for(let i=0;i<len;i++)
      {
          if(count[arr[i]])
          {
              count[arr[i]] +=1;
          }
          else
          {
              count[arr[i]] = 1;
          }
      }
      for (let key in count){
          if(count[key]===2)
          {
              var res = key;
          }
      }
      return res;
  }
  

});