/*You are a passport issuer, but due to some problems in the system, there are redundant  passport numbers. Your task is to delete all the duplicate passport numbers. You are given a list of passport numbers.

Input Description:
You are given length of list.Second line,You are given with a list.

Output Description:
Print the list of passport numbers without duplicates.

Sample Input :
5
A23 B56 B56 C79 D16
Sample Output :
A23 B56 C79 D16
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
    var val = userInput[1].split(" ");
    var counts = {};
    duplicate(val);
    function duplicate(arr){
        var len = arr.length ; // array length
        for(let i=0;i<len;i++)
        {
            if(counts[arr[i]])
            {
                counts[arr[i]] += 1 ;
            }
            else
            {
                counts[arr[i]] = 1;
            }
        }
        for (let key in counts)
        {
            if(counts[key]>1)
            {
                position = arr.lastIndexOf(key);        // using last index of method to remove the last appearance 
                arr.splice(position,1);                 //splice method will remove the element in array 
                
            }
        }
        console.log(arr.join(" "));
    }
    
    
});