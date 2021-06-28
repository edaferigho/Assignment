
const http = require('http')

let server =http.createServer((req,res)=>{
    http.get('http://jsonplaceholder.typicode.com/users/',res=>{
        let data = ''
        res.on('data',(chunk)=>{
            data+=chunk
        })
        res.on('end',()=>{
            let json = JSON.parse(data)
            for(jsonItem of json){
                console.log(jsonItem.name)
            }
        })
    })
    })

    

server.listen(9000,'127.0.0.1',()=>{
    console.log(`Server is listening at 127.0.0.1:9000`) 
}
)