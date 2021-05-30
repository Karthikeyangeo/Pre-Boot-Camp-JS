/*
You will be provided with a number.
Print the number of days in the month corresponding to that number.
Note: In case the input is February, print 28 days. 
If the Input is not in valid range print "Error".

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
    n = parseInt(userInput);    //Getting the no of month 
    if(n<=0 || n>12){
        console.log("Error")
    }
    else {
        if(n==1 || n==3|| n==5|| n==7|| n==8|| n==10|| n==12){
            console.log(31);
        }
        else if (n==2){
            console.log(28);
        }
        else if(n==4 || n==6 || n==9 || n ==11){
            console.log(30);
        }
    }
});