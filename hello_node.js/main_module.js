// let m =require('./math-tools.js');

// console.log(m.add(1, 2));

// const fs = require('fs');

// let fileList = fs.readdirSync('.'); //특정 디렉토리 항목의 내용을 리스트 형식으로 반환한다.
// console.log(fileList)

// fs.writeFileSync('new', 'Hello Node.js!'); //new라는 파일에 Hello Node.js라는 값을 적는다. 파일이 없으면 새로 생성한다.

// const os = require('os'); //운영체제(Operating System:OS), 운영체제 관련 정보를 얻을 수 있다.
// console.log(os.cpus())


const cowsay = require('cowsay');
console.log(cowsay.say({
	text: "Hello!!",
}));

