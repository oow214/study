const http = require('http'); // etc

const express = require('express');
const { request, response } = require('express');

const app = express(); //express이름 말고 app으로 이름 사용, 이름은 내 맘대로, express는 app을 쓰는 경우가 많다.



app.get('/', (request, response) => { 
    response.end(`<h1>Welcome!</h1>`);
});

app.get('/users', (request, response) => {
    response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
    const userName = users[request.params.id - 1];
    response.end(`<h1>${userName}</h1>`);
});

app.get('/', (request, response) => {
    response.end(`<h1>Page Not Available</h1>`);
});

app.listen(3000);


