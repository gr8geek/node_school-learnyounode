const fs = require('fs')
let string1 = fs.readFileSync(process.argv[2]).toString()
let x= string1.split('\n');
console.log(x.length-1)