const fs = require('fs')// fs = file system library
const myfunc = (callback)=>{
    fs.readFile(process.argv[2],(err,data)=>{
        var num = data.toString().split('\n').length-1
        callback(num)
    })
}
function callback(num){
    console.log(num)
}
myfunc(callback)