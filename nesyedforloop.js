const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var sum = 0;
for(var i = 0 ; i<userInput.length;i++){
    a = userInput[i].split(" ");
    console.log(a);
    for(j=0 ; j<a.length;j++){
        sum = sum + (+a[j]);
    }
}
console.log(sum);

});
