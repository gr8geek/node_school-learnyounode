const http = require('http')
http.get(process.argv[2],(res)=>{
    var string1=""
    res.setEncoding('utf-8')
    res.on('err',(err)=>{
        console.log(err)
        return;
    })
    res.on('data',(data)=>{
        string1+=data
    })
    res.on('end',()=>{
        console.log(string1.length)
        console.log(string1)
    })
})