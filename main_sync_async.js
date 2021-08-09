/*
const fs = require('fs');
console.log("동기");
console.log("Start");

let content = fs.readFileSync('./new', 'utf8'); //파일 내용 읽어서 리턴하는 함수, 두번째 인자는 인코딩방식
console.log(content);

console.log('Finish');

console.log("비동기");
console.log("Start");

//함수 이름이 바뀌었다. 
fs.readFile('./new', 'utf8', (error, data) => {     //3번째 인자는 JS에서 함수 간략하게 나타날 때 쓰는 화살표함수 사용.
	console.log(data);
});

console.log('Finish');
*/

/*
const EventEmitter = require('events');

const myEmitter = new EventEmitter(); 
const myEmitter2 = new EventEmitter(); 


myEmitter.on('test', () => {
    console.log('1');
});

myEmitter.on('test', () => {
    console.log('5');
});

myEmitter2.on('test', () => {
    console.log('3');
});

//myEmitter.emit('test');
myEmitter2.emit('test');
*/


const EventEmitter = require('events');

const myEmitter = new EventEmitter(); 

const obj = {type: 'text', data: 'Hello Yeonwoo', date: '2021-08-09'};

myEmitter.on('test', (info) => {    
    console.log(info);
});

myEmitter.emit('test', obj);

