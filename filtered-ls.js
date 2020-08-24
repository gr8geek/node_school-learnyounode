const fs = require('fs')
const myFunction = ()=>{
    fs.readdir(process.argv[2],(err,data)=>{
       
            data.forEach(file =>{
                var str = file.split('.')
                if(str[1]==process.argv[3]){
                    console.log(file);
                }
        })
    })
}
myFunction()
