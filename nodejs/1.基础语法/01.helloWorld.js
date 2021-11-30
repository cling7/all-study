var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data); // 输出Buffer
console.log(data.toString());  // helloworld