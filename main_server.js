const http = require('http'); //http코어모듈 사용

let server = http.createServer(function (request, response) { 
    response.end('<h1>Hello world!</h1>');
    
});
server.listen(3000);


