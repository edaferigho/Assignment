
let name = 'Akpokinovo'
let host = '127.0.0.1'
let port =9000

let http = require('http')

let server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.write(`<h1>Akpokiniovo Edafe</h1>`)
    res.end()
})

server.listen(port,host,()=>{
    console.log(`Server is listening at ${host}:${port}`)
})
