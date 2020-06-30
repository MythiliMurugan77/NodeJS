const server = require('http');
const fs = require('fs');
const path = require('path');
const output= server.createServer((req, res)=>{
    fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>
                {
                    
                    res.end(data);
                });
    
    
});
output.listen(5000,()=>{
    console.log('Server running...');
}) ;