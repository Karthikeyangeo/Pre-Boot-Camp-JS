/*You are provided with the radius of a circle "A". Find the length of its circumference.

Note: In case the output is coming in decimal, roundoff to 2nd decimal place. 
In case the input is a negative number, print "Error".
Getting input via STDIN */

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    r = parseFloat(userInput[0]);
    if(r > 0){
        var pi= Math.PI;
        var area = 2*pi *r;
        area = parseFloat(area).toFixed(2);
        console.log(+area);
        
    }
    else{
        console.log("Error");
    }
    

});