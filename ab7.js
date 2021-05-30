/*The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. 
You are provided with the side "a". 
Find the area of the equilateral triangle.
Getting input via STDIN*/

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    a = parseFloat(userInput);      // getting the side of triangle
    area = equilateral(a);
    console.log(area);

});
function equilateral(data){
    //data is the side of the triangle
    var side = data;
    var area = (Math.sqrt(3)/4)*Math.pow(data,2);
    area = area.toFixed(2);
    return area;
}