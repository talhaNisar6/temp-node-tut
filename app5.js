const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('welcome tp our homepage');
    }
    if(req.url === '/about')
    {
        res.end('welcome tp our about');

    }
    res.end(`
    <h1>oops</h1>
    <a href="/">backhome</a>`)
})

server.listen(5000)