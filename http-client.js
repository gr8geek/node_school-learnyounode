const http = require('http')
http.get(process.argv[2],(res)=>{
    res.setEncoding('utf-8')
    res.on('err',(err)=>{
        console.log(err)
        return;
    })
    res.on('data',(data)=>{
        console.log(data)
        return;
    })
})