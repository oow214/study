const http = require('http'); //http코어모듈 사용

// let users = ['Tom', 'Andy', 'Jessica', 'Paul'];

// let server = http.createServer(function (request, response) { 
    
//     // console.log(request.url); //클라이언트가 요청한 url(호스트 제외한 PATH부분)이 담아져있다.
//     // //response.end('<h1>Hello world!</h1>');

//     if (request.url === '/'){
//         response.end('<h1>Welcome!</h1>');
//     }else if(request.url === '/users'){
//         response.end('<h1>' + users + '</h1>');
//     }else if(request.url.split('/')[1] === 'users'){
//         //url: /users/1, /users/2, ...
//         let userIdx = request.url.split('/')[2];
//         let userName = users[userIdx - 1];  //url은 1부터, 배열은 0부터 시작이므로 -1해주기

//         response.end('<h1>' + userName + '</h1>');
//     }
//     else{
//         response.end('<h1>Page Not Abailable</h1>');
//     }
    
// });

const users = ['Tom', 'Andy', 'Jessica', 'Paul']; // const

const server = http.createServer((request, response) => { // Arrow Function, const
    if (request.url === '/') {
        response.end('<h1>Welcome!</h1>');
    } else if (request.url === '/users') {
        response.end(`<h1>${users}/h1>`); // Template String
    } else if (request.url.split('/')[1] === 'users') {
        // url : /users/1, /users/2, .. // etc
        const userIdx = request.url.split('/')[2];
        const userName = users[userIdx - 1]; // etc

        response.end(`<h1>${userName}</h1>`); // Template String
    } else {
        response.end('<h1>Page Not Available</h1>');
    }
});

// server.listen(3000);


server.listen(3000);


