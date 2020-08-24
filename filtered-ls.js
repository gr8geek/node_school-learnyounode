const path = require('path')
const fs = require('fs')
const myFunction = ()=>{
    fs.readdir(process.argv[2],(err,data)=>{
            data.forEach(file =>{
                if(path.extname(file)=='.'+process.argv[3]){
                    console.log(file);
                }
        })
    })
}
myFunction()
