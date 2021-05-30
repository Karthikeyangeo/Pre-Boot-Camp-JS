/*Write a code to get the input in the given format and print the output in the given format.

Input Description:
First-line indicates two integers which are the size of array and 'K' value. Second-line indicates an integer contains elements of an array.

Output Description:
Print the taken input in the same format.

Sample Input :
5 3
1 2 3 4 5*/
//------------------------------------------------------
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
    
    var a = userInput[0].split(" ");
    var str1 ="";
    var str2="";
    for ( var i=0 ; i<a.length ; i++){
        str1 = str1+ a[i]+ " ";
    }
    var b = userInput[1].split(" ");
    for (var j =0; j<b.length ; j++){
        str2 = str2 +b[j]+ " ";
    }
    console.log(str1.trim());
    console.log(str2.trim());


});