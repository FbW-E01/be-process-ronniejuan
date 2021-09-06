import http from 'http'

//const requestHandler = ()=>{}

function requestHandler(request,response){
    const randomNumber = (Math.random()*3)
    response.end(randomNumber.toString())
}

const myServer = http.createServer(requestHandler);

myServer.listen(8081)